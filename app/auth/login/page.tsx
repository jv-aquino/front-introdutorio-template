'use client';
import './login.css';

import { login } from '@/services/UserService';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const user = await login({ email, password });

      if (user) {
        toast.success(`Bem-vindo de volta, ${user.firstName || 'usuário'}!`);
        router.push('/');
      }
    } catch (error: any) {
      toast.error(error.message || 'Ocorreu um erro inesperado.');
    }
  };

  return (
    <div className="flex flex-col items-center pt-14 mx-auto w-[650px] h-screen">
      <h1 className="text-[40px]">
        GLAD <span className="text-2xl">by Athena</span>
      </h1>

      <div className="self-start flex flex-col gap-2 font-bold pt-[108px]">
        <h2 className="text-5xl">Welcome Back!</h2>
        <p className="text-gray-500 text-[20px]">Simple welcoming text</p>
      </div>

      <form className="w-full pt-8" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-8">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email (joao.aquino@polijunior.com.br)"
            className="login__input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <div className="w-full flex flex-col items-center gap-2">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password (senha)"
              className="login__input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button type="button" className="font-bold text-blue-300 self-end">
              Forgot password?
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full gap-4 pt-[56px]">
          <button type="submit" className="login__button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
