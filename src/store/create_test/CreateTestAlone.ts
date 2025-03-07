import { Test } from '@/types/Test/test';

import { create } from 'zustand'




interface CreateTestAlone {
    creationInfo: Test;
    setInfo: (newInfo: Partial<Test>) => void;
    resetAllInfo: () => void;
    isTestOptionsValid: () => boolean;
    isTestProblemsValid: () => boolean;
}

export const useTestCreateAlone = create<CreateTestAlone>((set, get) => ({
    creationInfo: {
        name: "",
        subject: "",
        difficulty: "Легкий",
        topic: '',
        problems: [],
        tags: [],
        rating: undefined,
    },

    setInfo: (newInfo) => set((state) => ({
        creationInfo: { ...state.creationInfo, ...newInfo }
    })),

    resetAllInfo: () => set(() => ({
        creationInfo: {
            name: "",
            subject: "",
            difficulty: "Легкий",
            topic: '',
            problems: [],
            tags: [],
            rating: undefined,
        }
    })),

    // использовать, когда пользователь задает параметры теста 
    isTestOptionsValid: () => {
        const { creationInfo } = get(); // получаю актуальные данные
        if (!creationInfo.name.trim()) return false;
        if (!creationInfo.topic.trim()) return false;
        if (!creationInfo.subject.trim()) return false;

        return true; // все настройки заполнены
    },

    // использовать эту функцию, когда человек уже заполнил все задания теста
    //  и нажимает опубликовать
    isTestProblemsValid: () => {
        const { creationInfo } = get();

        if (creationInfo.problems.length === 0) return false

        // прохожусь по каждой проблеме
        return creationInfo.problems.every((problem) => {



            if (!problem.question.trim()) return false

            if (!Array.isArray(problem.answers) || problem.answers.length === 0) return false; // проверяем, что массив ответов не пустой

            const hasEmptyAnswer = problem.answers.some((answer) => !answer.value.trim()); // проверка на пустые строки в ответах
            if (hasEmptyAnswer) return false;

            //проверяю, что внутри каждой задачи есть как минимум один правильный ответ 
            // и как минимум два варианта ответ
            return problem.answers.some((answer) => answer.is_correct) && problem.answers.length >= 2
        })

    }

}));
