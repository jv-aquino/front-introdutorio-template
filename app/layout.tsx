import 'material-symbols/outlined.css';
import './globals.css';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';

import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ToastProvider } from '@/components/common/ToastProvider';
import ThemeProvider from '@/components/common/ThemeProvider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

const poppins = Poppins({
  weight: ['500', '600', '700']
});

// tags <meta> e muito mais do que viria numa <head>
export const metadata: Metadata = {
  title: 'Front Template',
  description: 'Template'
};

export default function RootLayout({
  children
}: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      { /*theme provider é o body, passe as classes de fontes e tal igual no next normalmente */}
      <ThemeProvider className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}>
        {children}
        
        <ToastProvider />
      </ThemeProvider>
    </html>
  );
}
