'use client'
import { useTheme } from '@/components/common/ThemeProvider';
import SwitchThemeButton from '@/components/pjlib/SwitchThemeButton';
import Image from 'next/image';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <SwitchThemeButton className='absolute top-6 right-6' iconClassName='h-7 w-7' theme={theme} setTheme={setTheme} />
      
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <p className='flex flex-wrap gap-4 items-center justify-center text-2xl font-bold text-blue-700 h-[148px]'>
          <Image
            src={"/images/" + (theme === 'dark' ? "logo.png" : "logo_azul.png")}
            alt="Next.js logo"
            width={180}
            height={148}
            priority
          />
          TEMPLATE DA MELHOR ÁREA DA PJ E TALVEZ ATÉ DO NTEC
        </p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left">
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
            className="botaoRedondoInicial border-transparent bg-foreground text-background 
            hover:bg-[#383838] dark:hover:bg-[#ccc] hover:text-slate-100 dark:hover:text-blue-900"
            href="/protegido"
          >
            PÁGINA PROTEGIDA (SÓ PODE LOGADO)
          </a>
          <a
            className="botaoRedondoInicial border-black/[.14] dark:border-white/[.145] 
            hover:bg-zinc-200 dark:hover:bg-[#1a1a1a] hover:border-transparent not-dark:hover:text-blue-700"
            href="/auth/login"
          >
            LOGAR
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="nextJsLinks"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <a
          className="nextJsLinks"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </a>
        <a
          className="nextJsLinks"
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
