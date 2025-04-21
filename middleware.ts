import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getUser } from './services/UserService';

export async function middleware(req: NextRequest) {
  const user = await getUser();
  const path = req.nextUrl.pathname;

  // se o user n estiver logado e não estiver acessando as rotas de login (auth), redireciona para a página de login
  if (!user && !path.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  } 
  // se ele estiver logado e estiver acessando as rotas de login (auth), redireciona para a página inicial
  else if (user && path.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    /* https://nextjs.org/docs/app/building-your-application/routing/middleware
     * bloqueia os paths com exceção dos seguintes:
     * - raiz `/`
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|$).*)'
    // se quiser tirar a raíz ($ no matcher), 
    // '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ]
};

/*
 * a anterior é uma lógica reversa, de 'desativar' o middleware para certos paths
 * se você quiser ATIVAR o middleware para X paths, use uma configuração desse tipo:
  
  export const config = {
    matcher: [
      '/admin/:path*',
      '/protegido/:path*',
    ]
  };
 */