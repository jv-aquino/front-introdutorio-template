// CLIENT-SIDE COOKIES
// só podem ser pegados os que não tiverem httpOnly como true, faça isso para coisas de cliente/browser como darkMode

export const getCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
};

export const setCookie = (
  name: string,
  value: string,
  options: { path?: string; expires?: Date; secure?: boolean; sameSite?: 'Strict' | 'Lax' | 'None' } = {}
): void => {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (options.path) {
    cookieString += `; path=${options.path}`;
  }

  if (options.expires) {
    cookieString += `; expires=${options.expires.toUTCString()}`;
  }

  if (options.secure) {
    cookieString += '; secure';
  }

  if (options.sameSite) {
    cookieString += `; samesite=${options.sameSite}`;
  }

  document.cookie = cookieString;
};
