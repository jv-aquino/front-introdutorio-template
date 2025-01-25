'use server'
import type { UserLogin } from "@/types/interfaces/User";
import api from "./api";
import { cookies } from "next/headers";

// COOKIES SETADOS NO SERVER-SIDE (AINDA ESTÃO NO BROWSER MAS SÃO SETADOS DE FORMA ASÍNCRONA)
async function setAuthCookies(token: string, userId: string, darkMode: boolean | null): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set('@app:token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', path: '/' });
  cookieStore.set('@app:userId', userId, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', path: '/' });
  if (darkMode !== null) {
    cookieStore.set('@app:darkMode', darkMode ? 'true' : '', { sameSite: 'lax', path: '/' });
  }
}

async function getAuthCookie(cookie: string): Promise<string | null> {
  const cookieStore = await cookies();
  const cookieData = cookieStore.get(cookie);

  return cookieData?.value || null;
}

async function getUser(expectToBeLogged?: boolean) {
  const token = await getAuthCookie('@app:token');
  const id = await getAuthCookie('@app:userId');
  
  try {
    if (!token) {
      throw new Error('Not logged');
    }
    if (!id) {
      throw new Error('UserId not set')
    }
    
    const response = await api.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (e) {
    if (expectToBeLogged) {
      console.log(`Error: ${e instanceof Error ? e.message : String(e)}`)
    }
    return null;
  }
}

async function login(data: UserLogin) {
  try {
    const response = (await api.post('/sessions/login', data)).data;
    
    if (!response?.token || !response?.user.id) {
      throw new Error('Internal Server Error');
    }

    await setAuthCookies(response.token, response.user.id, response.user.darkMode);

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    return response.user;
  } catch (e) {
    throw new Error('Login Error: ' + e);
  }
}

async function logout() {
  try {
    await setAuthCookies('', '', null);

    api.defaults.headers.Authorization = "";
  } catch (e) {
    throw new Error('Logout Error: ' + e)
  }
}

export { getUser, login, logout, };