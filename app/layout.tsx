import 'material-symbols/outlined.css';
import './globals.css';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';

import type { ReactNode } from 'react';
import type { Metadata } from 'next';

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
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
