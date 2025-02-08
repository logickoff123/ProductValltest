'use client'
// ПОДКЛЮЧИТЬСЯ К БД 
import Image from "next/image"

export default function SearchBar() {

    return (
        <div className="w-[900px] flex flex-col items-center justify-center gap-6">
            <div className="text-white text-5xl font-bold text-center">
                Выполните поиск среди <span className="text-[#C1EF00]">58340</span> тестов и найдите свой любимый
            </div>

            <div className=" rounded-xl bg-white w-full p-5 flex items-center justify-between  ">

                <input className='outline-none w-full' type="text" placeholder="Найти тест на тему" />
                <button>
                    <Image src='topHeader/searchIcon.svg' alt='Поиск' width={20} height={20} />

                </button>
            </div>
        </div>

    )
}