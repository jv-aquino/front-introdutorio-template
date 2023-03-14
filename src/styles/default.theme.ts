export const defaultTheme = {
    colors: {
        sky1: 'hsl(205, 45.0%, 8.6%)',
        sky2: 'hsl(202, 71.4%, 9.6%)',
        sky3: 'hsl(201, 74.6%, 12.2%)',
        sky4: 'hsl(201, 77.4%, 14.4%)',
        sky5: 'hsl(200, 80.3%, 16.5%)',
        sky6: 'hsl(200, 84.1%, 18.9%)',
        sky7: 'hsl(199, 90.2%, 22.1%)',
        sky8: 'hsl(198, 100%, 26.1%)',
        sky9: 'hsl(193, 98.0%, 70.0%)',
        sky10: 'hsl(192, 100%, 77.0%)',
        sky11: 'hsl(192, 85.0%, 55.8%)',
        sky12: 'hsl(198, 98.0%, 95.8%)',

        slate1: 'hsl(200, 7.0%, 8.8%)',
        slate2: 'hsl(195, 7.1%, 11.0%)',
        slate3: 'hsl(197, 6.8%, 13.6%)',
        slate4: 'hsl(198, 6.6%, 15.8%)',
        slate5: 'hsl(199, 6.4%, 17.9%)',
        slate6: 'hsl(201, 6.2%, 20.5%)',
        slate7: 'hsl(203, 6.0%, 24.3%)',
        slate8: 'hsl(207, 5.6%, 31.6%)',
        slate9: 'hsl(206, 6.0%, 43.9%)',
        slate10: 'hsl(206, 5.2%, 49.5%)',
        slate11: 'hsl(206, 6.0%, 63.0%)',
        slate12: 'hsl(210, 6.0%, 93.0%)',

        white: '#FFFFFF',

        onSurface: {
            lowEmphasis: '#949494',
            mediumEmphasis: '#545454',
            highEmphasis: '#1E2732'
        }
    },
    space: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256],
    radii: {
        sm: 8,
        md: 16,
        lg: 32
    },
    fontSizes: {
        1: '12px',
        2: '13px',
        3: '15px'
    },
    fonts: {
        untitled: 'Untitled Sans, apple-system, sans-serif',
        mono: 'Söhne Mono, menlo, monospace'
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {}
};

export type Theme = typeof defaultTheme;

// props that later will be injected by styled-components
export type ThemeProps = { theme?: Theme };

// 'primary' | 'secondary'
export type ColorType = keyof Theme['colors'];

// 12 possible spaces
export type SpaceIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

// 3 possible border radius
export type RadiiIndex = 'sm' | 'md' | 'lg';
