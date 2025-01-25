'use client';
import type { ReactNode } from 'react';
import { getCookie } from '@/services/cookies';
import { useState, useEffect } from 'react';

function ThemeProvider({
  className, children
}: { className: string, children: ReactNode }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const darkModeCookie = getCookie('@app:darkMode')
    // gosto mt de dark mode então lembre de mudar isso aqui tbm (descomentar)
    // const darkMode = darkModeCookie === 'true';
    const darkMode = true;
    
    setTheme(darkMode ? 'dark' : 'default');
  }, []);

  return (
    <body className={`${className} ThemeProvider ${theme}`}>
      {children}
    </body>
  );
}

export default ThemeProvider;
