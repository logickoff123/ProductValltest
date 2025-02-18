export type Exercise = {
    question: string;
    answers: string[];
};

export interface PreviewTestAI {
    name: string;
    exercises: Exercise[];
}
