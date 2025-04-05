"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Имитируем успешную авторизацию
    const mockUser = { login: 'test@example.com', password: '123' };

    if (login === mockUser.login && password === mockUser.password) {
      console.log('Успешная аутентификация');
      
      // Сохраняем путь, куда редиректить после входа
      const redirectTo = localStorage.getItem("redirectAfterLogin") || "/catalog";
      localStorage.removeItem("redirectAfterLogin");
      
      // Редиректим пользователя
      router.push(redirectTo);
    } else {
      console.error('Ошибка аутентификации');
      alert('Неверный логин или пароль');
    }
  };

  return {
    login,
    password,
    setLogin,
    setPassword,
    handleSubmit,
  };
};



// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export const useAuth = () => {
//   const [login, setLogin] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const router = useRouter();

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ login, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Успешная аутентификация:', data);

//         router.push('/catalog'); // было /auth/catalog - исправил 
//       } else {
//         console.error('Ошибка аутентификации:', response.statusText);
//         alert('Неверный логин или пароль');
//       }
//     } catch (error) {
//       console.error('Ошибка при отправке запроса:', error);
//       alert('Произошла ошибка при попытке входа');
//     }
//   };

//   return {
//     login,
//     password,
//     setLogin,
//     setPassword,
//     handleSubmit,
//   };
// };