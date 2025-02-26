'use client'
import { createContext, useContext, useState, ReactNode } from "react";

// Определяем интерфейс для значений контекста
interface WorkshopContextType {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    categories: string[];
}

// Создаем контекст с начальным значением null
const WorkshopContext = createContext<WorkshopContextType | null>(null);

export function WorkshopProvider({ children }: { children: ReactNode }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const categories = ["Все тесты", "Опубликованные", "Черновики", "Избранное"];

    return (
        <WorkshopContext.Provider value={{ activeIndex, setActiveIndex, categories }}>
            {children}
        </WorkshopContext.Provider>
    );
}

export function useWorkshop() {
    const context = useContext(WorkshopContext);
    if (!context) {
        throw new Error("useWorkshop должен использоваться внутри WorkshopProvider");
    }
    return context;
}

