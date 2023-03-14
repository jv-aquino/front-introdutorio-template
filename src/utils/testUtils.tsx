import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/default.theme';

const customRender = (ui: JSX.Element, { ...renderOptions } = {}) =>
    render(
        <ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>,
        renderOptions
    );

export * from '@testing-library/react';

export { customRender as render };
