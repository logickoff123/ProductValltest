'use client';

import { useAuth } from '@/actions/auth/use_auth.ts';
import Background from '@/components/auth/background';
import { UniversalButton } from '@/components/auth/universal_botton';
import AuthButtons from '@/components/auth/login_links'
import Image from 'next/image';

export const SignupContainer: React.FC = () => {
  const { login, password, setLogin, setPassword, handleSubmit } = useAuth();

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Background />
      <div className="absolute lg:right-20 bg-[#1c1c1cea] p-8 rounded-[24px] shadow-md z-10 w-[360px] h-[454px] md:w-[464px] flex flex-col">
        <form onSubmit={handleSubmit} className="w-full flex flex-col flex-grow">
          <h1 className="text-white text-2xl font-medium text-center mt-1">Регистрация</h1>
          <div className="space-y-5">
            <div>
              <input
                type="text"
                id="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="w-full px-4 py-3 bg-[#ffffff1a] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder:text-[#ffffff32] mt-7"
                placeholder="Почта"
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#ffffff1a] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder:text-[#ffffff32]"
                placeholder="Пароль"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <Image src="/auth/line.png" alt="Line" width={464} height={2} className="w-full h-auto"
            />
          </div>
          <div className="mt-6">
            <AuthButtons />
          </div>
          <div className="mt-auto mb-1">
            <UniversalButton text="Зарегистрироваться" href="/catalog" />
          </div>
        </form>
      </div>
    </div>
  );
};
