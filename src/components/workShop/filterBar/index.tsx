'use client'
import { useState } from "react";
import { FilterState } from "@/context/workshop";
import { FilterButton } from "./filterButton";

export function FilterBar() {
    const [filterWithOpenKey, setFilterWithOpenKey] = useState<keyof FilterState | null>(null);

    return (
        <div className="w-full flex items-start gap-2 mt-6">
            <FilterButton
                name="Предмет"
                filterKey="subject"
                filterOptions={['Математика', 'Русский язык', 'Физика', 'Химия', 'История']}
                filterWithOpenKey={filterWithOpenKey}
                setFilterWithOpenKey={setFilterWithOpenKey}
            />
            <FilterButton
                name="Класс"
                filterKey="grade"
                filterOptions={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']}
                filterWithOpenKey={filterWithOpenKey}
                setFilterWithOpenKey={setFilterWithOpenKey}
            />
            <FilterButton
                name="Тема"
                filterKey="theme"
                filterOptions={['Алгебра', 'Геометрия', 'Литература', 'Программирование', 'Биология']}
                filterWithOpenKey={filterWithOpenKey}
                setFilterWithOpenKey={setFilterWithOpenKey}
            />
            <FilterButton
                name="Сложность"
                filterKey="lvl"
                filterOptions={['Легко', 'Средне', 'Сложно']}
                filterWithOpenKey={filterWithOpenKey}
                setFilterWithOpenKey={setFilterWithOpenKey}
            />


        </div>


    )
}