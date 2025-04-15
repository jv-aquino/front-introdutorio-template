'use client'
import { useTheme } from '@/components/common/ThemeProvider';
import SwitchThemeButton from '@/components/pjlib/SwitchThemeButton';
import { Moon, Sun } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <SwitchThemeButton theme={theme} setTheme={setTheme} />
      
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <p className='flex gap-4 items-center text-2xl font-bold text-blue-700 h-[148px]'>
          <Image
            src={"/images/" + (theme === 'dark' ? "logo.png" : "logo_azul.png")}
            alt="Next.js logo"
            width={180}
            height={148}
            priority
          />
          TEMPLATE DA MELHOR ÁREA DA PJ E TALVEZ ATÉ DO NTEC
        </p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{' '}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded-sm font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="block text-center rounded-full 
            border border-solid border-transparent transition-colors bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] 
            text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-5 sm:min-w-44 hover:text-gray-800 dark:hover:text-blue-950"
            href="/protegido"
          >
            PÁGINA PROTEGIDA (SÓ PODE LOGADO)
          </a>
          <a
            className="block text-center rounded-full 
            border border-solid border-black/[.08] dark:border-white/[.145] transition-colors hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent 
            text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-5 sm:min-w-44 hover:text-white"
            href="/auth/login"
          >
            LOGAR
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
