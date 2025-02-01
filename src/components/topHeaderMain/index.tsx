import Image from "next/image"



export function TopHeader() {


    return (
        <header className="flex items-center justify-between">

            <div className="font-roboto text-[32px]  text-white">Главная</div>

            <div className="flex items-center p-[10px] gap-5 bg-secondaryBackground rounded-full">
                <div className="flex p-3 gap-3 bg-mainBackground rounded-full" >
                    <Image src="/topHeader/searchIcon.svg" width={11} height={11} alt="Поиск" />
                    <input type="text" placeholder="Поиск" className="text-sm text-gray-400 bg-mainBackground focus:outline-none" />
                </div>

                <Image src="/topHeader/notificationIcon.svg" width={24} height={24} alt="Уведомления" />
                <Image src='/topHeader/avatar.svg' width={41} height={41} alt='Аватар' />

            </div>

        </header>
    )
}