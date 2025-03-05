import { TestAI } from '@/types/Test/test';
import { create } from 'zustand'




interface CreateTestAI {
    creationInfoAI: TestAI;
    setInfo: (newInfo: Partial<TestAI>) => void;
    resetAllInfo: () => void;
    isTestOptionsValid: () => boolean;
}

// TODO колво заданий
export const useTestCreateAI = create<CreateTestAI>((set, get) => ({
    creationInfoAI: {
        name: "",
        subject: "",
        difficulty: "Легкий",
        topic: '',
        totalQuestions: 0,
        // description: '',
        tags: 'ИИ'

    },

    setInfo: (newInfo) => set((state) => ({
        creationInfoAI: { ...state.creationInfoAI, ...newInfo }
    })),

    resetAllInfo: () => set({
        creationInfoAI: {
            name: "",
            subject: "",
            difficulty: "Легкий",
            topic: '',
            totalQuestions: 0,
            // description: '',
            tags: 'ИИ'
        }
    }),


    isTestOptionsValid: () => {
        const { creationInfoAI: creationInfoAI } = get();
        if (!creationInfoAI.name.trim()) return false;
        if (!creationInfoAI.subject.trim()) return false;
        if (!creationInfoAI.topic.trim()) return false;
        if (creationInfoAI.totalQuestions === 0) return false;

        // if (!creationInfoAI.description.trim()) return false;

        return true;
    },


}))