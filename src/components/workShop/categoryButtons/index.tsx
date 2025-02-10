'use client'

import { useWorkshop } from "@/context/workshop";


export function WorkShopCategory() {
    const { activeIndex, setActiveIndex, categories } = useWorkshop();

    return (
        <div className="w-[calc(100vw-100px)] border-b-2 border-gray-300 box-content">
            <div className="px-10 flex gap-10">
                {categories.map((name, index) => (
                    <Category
                        key={index}
                        name={name}
                        indexOfCategory={index}
                        isActive={index === activeIndex}
                        setActiveIndex={setActiveIndex}
                    />
                ))}
            </div>
        </div>
    );
}


// добавить на вход индекс активного 
function Category(
    { name, indexOfCategory, isActive, setActiveIndex }: {
        name: string,
        indexOfCategory: number,
        isActive: boolean,
        setActiveIndex: (index: number) => void
    }) {
    return (
        <div className={`relative py-[15px] px-4 text-base  ${isActive ? 'text-[#C1EF00]' : 'text-[#718096]'} cursor-pointer group`} onClick={() => setActiveIndex(indexOfCategory)}>
            {name}
            {/* Подчеркивание снизу */}
            <span className={`absolute bottom-[-2px] left-0 w-full h-[4px] bg-[#C1EF00] rounded-t-full ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}transition-transform duration-300 ease-in-out`}></span>
        </div>
    );
}
