'use client'
import { createContext, useContext, useState } from "react";

// добавил вместо индексов, код более понятен 
export enum WorkShopCategoryEnum {
    ALL = "Все тесты",
    PUBLISHED = "Опубликованные",
    DRAFTS = "Черновики",
    FAVORITES = "Избранное",
}

interface WorkshopContextType {
    selectedCategory: WorkShopCategoryEnum;
    setSelectedCategory: (category: WorkShopCategoryEnum) => void;
    categories: WorkShopCategoryEnum[];
}

const WorkshopContext = createContext<WorkshopContextType | null>(null);

export function WorkshopProvider({ children }: { children: React.ReactNode }) {
    const [selectedCategory, setSelectedCategory] = useState<WorkShopCategoryEnum>(WorkShopCategoryEnum.ALL);

    return (
        <WorkshopContext.Provider value={{ selectedCategory, setSelectedCategory, categories: Object.values(WorkShopCategoryEnum) }}>
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
