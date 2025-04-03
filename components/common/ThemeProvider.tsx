'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction
} from 'react';
import { getCookie, setCookie } from '@/services/cookies';

interface ThemeContextType {
  theme: 'dark' | 'default';
  setTheme: Dispatch<SetStateAction<'dark' | 'default'>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'default',
  setTheme: () => {}
});
export function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider({ className, children }: { className: string, children: ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'default'>('default');

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
