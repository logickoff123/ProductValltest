import { create } from 'zustand'
import { Problem } from '@/types/Test/test'


interface TestSession {
    problems: Problem[]
    selectedAnswers: { [key: number]: string } // key -> это индекс задния, у нас будет много заданий и к ним будет относится ответ 
    setProblems: (problems: Problem[]) => void
    setAnswers: (questionIndex: number, answer: string) => void
    resetAllInfo: () => void
    checkResults: () => { result: number, total: number };
    areAllAnswersSelected: () => boolean
}

// TODO понять нужно ли поле для очистки полей 
export const useTestSession = create<TestSession>((set, get) => ({
    problems: [],
    selectedAnswers: {},

    setProblems: (problems) => set({ problems }),

    setAnswers: (questionIndex, answer) =>
        set((state) => ({
            selectedAnswers: { ...state.selectedAnswers, [questionIndex]: answer }
        })),


    checkResults: () => {
        const { problems, selectedAnswers } = get()

        //проваливаюсь внутрь одной проблемы
        // и с помощью сравнения нахожу правильные ответы
        const result = problems.filter((problem, index) =>
            problem.answers.some((ans) => ans.is_correct && ans.value === selectedAnswers[index])
        ).length;

        //всего вопросов
        const total = problems.length


        return { result: result, total: total }
    },
    // проверить, что на все задания есть ответ, чтобы логика не сломалась
    areAllAnswersSelected: () => {
        const { problems, selectedAnswers } = get()
        return problems.length === Object.keys(selectedAnswers).length
    },
    resetAllInfo: () => set((state) => ({
        problems: [],
        selectedAnswers: {},
    }))

}))