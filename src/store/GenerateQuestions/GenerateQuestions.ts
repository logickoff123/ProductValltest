import { create } from 'zustand';

interface UseGenerateQuestionsStore {
    text: string;
    questions: { question: string }[];
    setText: (value: string) => void;
    setQuestions: (questions: { question: string }[]) => void;
    resetText: () => void;
}

export const useGenerateQuestions = create<UseGenerateQuestionsStore>((set) => ({
    text: '',
    questions: [],
    setText: (value) => set({ text: value }),
    setQuestions: (questions) => set({ questions }),
    resetText: () => set({ text: '', questions: [] })
}));
