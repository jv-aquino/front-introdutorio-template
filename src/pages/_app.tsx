import AppProvider from 'hooks';
import { AppProps } from 'next/app';
import { GlobalStyles } from 'styles';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <AppProvider>
                <GlobalStyles />
                <Component {...pageProps} />
            </AppProvider>
        </>
    );
}

export default MyApp;
