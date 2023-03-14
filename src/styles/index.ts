/* eslint-disable no-shadow */
import { createGlobalStyle } from 'styled-components';
import * as theme from './selectors';
import { Theme, defaultTheme } from './default.theme';

export { theme, defaultTheme };
export type { Theme };

export const GlobalStyles = createGlobalStyle`
    @font-face{
        font-family: "Poppins Regular";
        src: url("/fonts/Poppins/Poppins-Regular.ttf") format('truetype');
    }
    @font-face{
        font-family: "Poppins Bold";
        src: url("/fonts/Poppins/Poppins-Bold.ttf") format('truetype');
    }
    @font-face{
        font-family: "Poppins SemiBold";
        src: url("/fonts/Poppins/Poppins-SemiBold.ttf") format('truetype');
    }
    @font-face{
        font-family: "Poppins Medium";
        src: url("/fonts/Poppins/Poppins-Medium.ttf") format('truetype');
    }
    @font-face{
        font-family: "Poppins ExtraLight";
        src: url("/fonts/Poppins/Poppins-ExtraLight.ttf") format('truetype');
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Poppins Regular', sans-serif;
    }

    html{
        font-size: 62.5%;// Isso existe para que 1rem seja igual a 10px, caso não tiver usando rem pode apagar;
    }
`;
