// import { useState } from "react";



export function WorkShopCategory() {
    //const activeButton = [true, false, false, false]

    // const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="w-[calc(100vw-100px)] border-b-2 border-gray-300 box-content">
            <div className="px-10 ] flex gap-10">
                <Category name="Все тесты" />
                <Category name="Опубликованные" />
                <Category name="Черновики" />
                <Category name="Избранное" />
            </div>
        </div>
    );
}


// добавить на вход индекс активного 
function Category({ name }: { name: string }) {
    return (
        <div className="relative py-[15px] px-4 text-base text-[#718096] cursor-pointer group">
            {name}
            {/* Подчеркивание снизу */}
            <span className="absolute bottom-[-2px] left-0 w-full h-[4px] bg-[#C1EF00] rounded-t-full scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
        </div>
    );
}
