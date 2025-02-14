export interface TestCardInterface {
    // remove OPTIONAL ?
    name?: string;
    imgPath?: string;
    totalQuestions?: number;
    totalComplited?: number;
    lvl?: "Легкий" | "Средний" | "Тяжелый";
    score?: number | string
    tags?: string[]
}