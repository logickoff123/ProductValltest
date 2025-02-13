'use client'
import { createContext, useContext, useReducer, useState } from "react";

// Категории
export enum WorkShopCategoryEnum {
    ALL = "Все тесты",
    PUBLISHED = "Опубликованные",
    DRAFTS = "Черновики",
    FAVORITES = "Избранное",
}

// Интерфейс для фильтров
export interface FilterState {
    subject: string | null;
    grade: number | string | null;
    theme: string | null;
    lvl: 'Легко' | 'Средне' | 'Сложно' | null;
}

// Тип экшенов для `useReducer`
type FilterAction = { type: 'SET_FILTER'; key: keyof FilterState; value: any };

// Reducer для фильтров
const filterReducer = (state: FilterState, action: FilterAction): FilterState => {
    switch (action.type) {
        case 'SET_FILTER':
            return { ...state, [action.key]: action.value };
        default:
            return state;
    }
};

// Интерфейс контекста
interface WorkshopContextType {
    selectedCategory: WorkShopCategoryEnum;
    setSelectedCategory: (category: WorkShopCategoryEnum) => void;
    categories: WorkShopCategoryEnum[];
    filters: FilterState;
    setActiveFilter: (key: keyof FilterState, value: any) => void;
}

// Создание контекста
const WorkshopContext = createContext<WorkshopContextType | null>(null);

// Провайдер
export function WorkshopProvider({ children }: { children: React.ReactNode }) {
    const [selectedCategory, setSelectedCategory] = useState<WorkShopCategoryEnum>(WorkShopCategoryEnum.ALL);

    // Фильтры 
    const [filters, dispatch] = useReducer(filterReducer, {
        subject: null,
        grade: null,
        theme: null,
        lvl: null
    });

    const setActiveFilter = (key: keyof FilterState, value: any) => {
        dispatch({ type: "SET_FILTER", key, value });
    };
    //
    return (
        <WorkshopContext.Provider value={{ selectedCategory, setSelectedCategory, categories: Object.values(WorkShopCategoryEnum), filters, setActiveFilter }}>
            {children}
        </WorkshopContext.Provider>
    );
}

// Кастомный хук для использования контекста
export function useWorkshop() {
    const context = useContext(WorkshopContext);
    if (!context) {
        throw new Error("useWorkshop должен использоваться внутри WorkshopProvider");
    }
    return context;
}
