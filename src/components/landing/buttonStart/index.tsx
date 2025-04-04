"use client"; // Важно для использования useRouter в Next.js 13+ (App Router)

import { useRouter } from "next/navigation";

export function ButtonStart() {
    const router = useRouter();

    const handleClick = () => {
        const isAuthenticated = !!localStorage.getItem("token"); // Проверяем, есть ли токен

        if (isAuthenticated) {
        router.push("/create_test"); // Если авторизован, сразу переходим
        } else {
        localStorage.setItem("redirectAfterLogin", "/create_test"); // Запоминаем, куда редиректить после входа
        router.push("/auth/signup"); // Отправляем на регистрацию
        }
    };

    return (
        <button
        onClick={handleClick}
        className="bg-[rgba(193,239,0,1)] text-black rounded-[12px] h-[54px] w-[218px] font-sans text-xl font-bold leading-none text-center flex items-center justify-center"
        >
        Создать тест
        </button>
    );
}
