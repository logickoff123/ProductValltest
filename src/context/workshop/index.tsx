'use client'
import { createContext, useContext, useState } from "react";

const WorkshopContext = createContext<any>(null);

export function WorkshopProvider({ children }: { children: React.ReactNode }) {
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
