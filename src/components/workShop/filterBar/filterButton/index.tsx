'use client'
import Image from "next/image";
import { useWorkshop, FilterState } from "@/context/workshop";

export const FilterPopUp = ({ nameArray, onSelect, showIt }: { filterName: string, nameArray: string[], onSelect: (value: string) => void, showIt: boolean }) => {
    return (
        <div className={`max-h-[325px] overflow-y-scroll transition-transform duration-300 ease-in-out  ${showIt ? " z-50 opacity-100 scale-100 translate-y-0" : "opacity-50 scale-0 -translate-y-1/2 -translate-x-1/4 pointer-events-none"} absolute left-0 top-full mt-2 border-[#C1EF00] border-2 flex flex-col items rounded-xl w-[200%] bg-mainBackground shadow-black shadow-lg`}>
            {nameArray.map((obj, i) => (
                <button
                    onClick={() => onSelect(obj)}
                    className={`text-base text-white py-7 pl-6 pr-16 flex items-center justify-start  shadow-sm shadow-black rounded-xl transtion duration-300 hover:bg-[#C1EF00] hover:text-mainBackground`}
                    key={i}>
                    {obj}
                </button>))}
        </div>
    )
}

export const FilterButton = ({
    name,
    filterKey,
    filterOptions,
    filterWithOpenKey,
    setFilterWithOpenKey
}: {
    name: string;
    filterKey: keyof FilterState;
    filterOptions: string[];
    filterWithOpenKey: keyof FilterState | null;
    setFilterWithOpenKey: (value: keyof FilterState | null) => void;
}) => {


    const { filters, setActiveFilter } = useWorkshop();
    const isPopUpOpen = filterWithOpenKey === filterKey
    const isFilterActive = filters[filterKey] != null   // этот фильтр активен 

    return (

        <div className="relative">
            <button onClick={() => {
                if (isFilterActive) {
                    setActiveFilter(filterKey, null); // Сбросить фильтр
                } else {
                    setFilterWithOpenKey(isPopUpOpen ? null : filterKey);
                }
            }}
                className={` transition duration-300 ease-in-out text-base flex justify-between items-center gap-2 border-[#C1EF00] border-2 rounded-xl px-6 py-[15px] ${isFilterActive ? 'bg-[#C1EF00] text-black' : 'text-white '} `}>
                {name}
                <div className="w-6 h-6 flex items-center justify-center">
                    {isFilterActive ?
                        <Image src='/workshop/exit.svg' alt="Крестик" width={12} height={12} />
                        :
                        <Image src='/workshop/arrow.svg' alt="Раскрыть" width={14} height={8} />}
                </div>
            </button>

            <FilterPopUp
                filterName={name}
                nameArray={filterOptions}
                onSelect={(value) => {
                    setActiveFilter(filterKey, value);
                    setFilterWithOpenKey(null);
                }}
                showIt={isPopUpOpen}
            />
        </div>


    )

}
