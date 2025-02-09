import Image from "next/image"

export function SearchBarWorkShop() {

    return (
        <div className="w-2/5 flex items-center justify-between bg-secondaryBackground px-10 py-5 rounded-xl ">
            <input className='outline-none w-full bg-secondaryBackground' type="text" placeholder="Найти тест на тему" />
            <button>
                <Image src='/topHeader/searchIcon.svg' alt='Поиск' width={20} height={20} />
            </button>
        </div>
    )
}