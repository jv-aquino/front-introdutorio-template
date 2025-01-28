'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from 'react';
import { getCookie, setCookie } from '@/services/cookies';

const ThemeContext = createContext({
  theme: 'default',
  setTheme: (theme: string) => {}
});

export function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider({ className, children }: { className: string, children: ReactNode }) {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    const darkMode = getCookie('dark_mode') === 'true';
    setTheme(darkMode ? 'dark' : 'default');
  }, []);

  useEffect(() => {
    setCookie('dark_mode', theme === 'dark' ? 'true' : 'false');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <body className={`ThemeProvider ${theme} ${className}`}>
        {children}
      </body>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
