import { create } from 'zustand';
import { Problem } from '@/types/Test/test';

interface TestSession {
    problems: Problem[];
    selectedAnswers: { [key: number]: string };
    testName: string;

    setTestName: (name: string) => void;
    setProblems: (problems: Problem[]) => void;
    setAnswers: (questionIndex: number, answer: string) => void;
    resetAllInfo: () => void;
    checkResults: () => { result: number; total: number };
    areAllAnswersSelected: () => boolean;
}

export const useTestSession = create<TestSession>((set, get) => ({
    problems: [],
    selectedAnswers: {},
    testName: '',


    setTestName: (name) => set({ testName: name }),

    setProblems: (problems) => set({ problems }),

    setAnswers: (questionIndex, answer) =>
        set((state) => ({
            selectedAnswers: { ...state.selectedAnswers, [questionIndex]: answer },
        })),

    // проверяет результаты теста
    checkResults: () => {
        const { problems, selectedAnswers } = get();

        const result = problems.filter((problem, index) =>
            problem.answers.some((ans) => ans.is_correct && ans.value === selectedAnswers[index])
        ).length;

        return { result, total: problems.length };
    },

    // проверяет, выбраны ли ответы на все вопросы
    areAllAnswersSelected: () => {
        const { problems, selectedAnswers } = get();
        return problems.length === Object.keys(selectedAnswers).length;
    },

    // сбрасывает всю информацию о тесте
    resetAllInfo: () => set({
        problems: [],
        selectedAnswers: {},
        testName: '',
    }),
}));
