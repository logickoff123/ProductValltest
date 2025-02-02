'use client'
import Image from "next/image"
import Link from "next/link"
export function LeftHeader() {

    const iconStyle = "w-[48px] h-[48px] flex items-center justify-center"
    return (
        // ИСПРАВИТЬ Padding
        <div className="h-full min-h-max flex flex-col items-center justify-between gap-[50px] bg-secondaryBackground max-w-min ">

            <Image src='leftHeader/LogoIcon.svg' alt="Valltest" width={40} height={45} />

            {/* Создать тест  */}

            <Link href='/create_test'>
                <Image src='leftHeader/CreateNewTestIcon.svg' alt="Главная" width={48} height={48} />
            </Link>

            <div className="flex flex-col gap-5">

                {/* Домой /catalog  */}
                <Link href='/catalog' className={iconStyle}>
                    <Image src='leftHeader/homeIcon.svg' alt="Главная" width={20} height={21} />
                </Link>

                {/* Мастерская ИСПРАВИТ НАЗВАНие */}
                <Link href='/workshop' className={iconStyle}>
                    <Image src='leftHeader/WorkShopIcon.svg' alt="Мастерская" width={24} height={24} />
                </Link>

                {/* Настройки */}

                <Link href='/settings' className={iconStyle}>
                    <Image src='leftHeader/SettingsIcon.svg' alt="Настройки" width={24} height={24} />
                </Link>



            </div>









        </div>
    )
}