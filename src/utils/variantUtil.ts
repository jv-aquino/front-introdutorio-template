/* eslint-disable @typescript-eslint/no-unused-vars */
import { css, CSSProp, DefaultTheme } from 'styled-components';

export const createVariant = (
    variants: { [key: string]: CSSProp<DefaultTheme> },
    vars: string | boolean
) => {
    if (Object.keys(variants).length === 2 && variants.true && variants.false)
        return variants[vars ? 'true' : 'false'];
    if (Object.keys(variants).length === 1 && variants.true)
        return vars ? variants.true : css``;
    return variants[vars as string];
};

export const mergeCss = (
    cssList: CSSProp<DefaultTheme>[]
): CSSProp<DefaultTheme> => {
    let result: CSSProp<DefaultTheme> = css``;

    cssList.forEach((individualCss) => {
        result = css`
            ${result}
            ${individualCss}
        `;
    });
    return result;
};

export const createMultipleVariants = (
    variants: { [key: string]: { [key: string]: CSSProp<DefaultTheme> } },
    vars: { [key: string]: string | boolean }
) => {
    const cssList: CSSProp<DefaultTheme>[] = [];

    Object.keys(variants).forEach((key) => {
        const individualCss = createVariant(variants[key], vars[key]);
        cssList.push(individualCss);
    });

    return mergeCss(cssList);
};

export const createCompoundVariant = (
    compoundVariants: {
        [key: string]: string | CSSProp<DefaultTheme>;
        css: CSSProp<DefaultTheme>;
    }[],
    vars: { [key: string]: string | boolean }
) => {
    let result: CSSProp<DefaultTheme> = css``;

    compoundVariants.forEach((compoundVariant) => {
        let allConditionsMet = true;

        const { css: _, ...variantWithoutCss } = compoundVariant;
        Object.keys(variantWithoutCss).forEach((key) => {
            if (variantWithoutCss[key] !== vars[key]) allConditionsMet = false;
        });
        if (allConditionsMet)
            result = css`
                ${result}
                ${compoundVariant.css}
            `;
    });

    return result;
};

const createVariants = (
    variants: {
        variants: { [key: string]: { [key: string]: CSSProp<DefaultTheme> } };
        compoundVariants: {
            [key: string]: string | CSSProp<DefaultTheme>;
            css: CSSProp<DefaultTheme>;
        }[];
    },
    vars: { [key: string]: string | boolean }
) => {
    let variantsCss: CSSProp<DefaultTheme> = css``;
    let compoundVariantsCss: CSSProp<DefaultTheme> = css``;

    if (variants.variants)
        variantsCss = createMultipleVariants(variants.variants, vars);

    if (variants.compoundVariants)
        compoundVariantsCss = createCompoundVariant(
            variants.compoundVariants,
            vars
        );

    return mergeCss([variantsCss, compoundVariantsCss]);
};

export default createVariants;
