/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeProps } from './default.theme';

import { getColor, getSpace, getRadii } from './getters';

type Resolver<T> = (props: ThemeProps) => T;

type OmitThemeProp<Args extends any[]> = Args[2] extends ThemeProps
    ? [Args[0], Args[1]]
    : [Args[0]];

function createSelector<T extends (...args: any) => any>(getter: T) {
    function select(
        ...args: OmitThemeProp<Parameters<T>>
    ): Resolver<ReturnType<T>>;
    function select(...args: Parameters<T>): ReturnType<T>;
    function select(...args: any): any {
        if (args.length === getter.length) {
            return getter(...args);
        }

        return (props: ThemeProps) => getter(...args, props);
    }

    return select;
}

export const color = createSelector(getColor);
export const space = createSelector(getSpace);
export const radii = createSelector(getRadii);
