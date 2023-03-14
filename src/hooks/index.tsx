import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/default.theme';

interface AppProviderProps {
    children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export default AppProvider;
