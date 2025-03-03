
// стандартный Test, который используем повсеместно 
export type Test = {
    name: string;
    subject: string;
    difficulty: 'Легкий' | 'Средний' | 'Сложный';
    topic: string;
    problems: Problem[];
    tags?: Tag[];
    rating?: number;
};

// !!!ВАЖНО!!! 
// тайп именно ДЛЯ СОЗДАНИЯ ТЕСТА AI 
export type TestAI = {
    name: string;
    subject: string;
    difficulty: 'Легкий' | 'Средний' | 'Сложный';
    topic: string;
    description: string;
    tags: 'ИИ';

}

type Problem = {
    question: string;
    answers: Answer[];
};

type Answer = {
    value: string | number;
    is_correct: boolean;
};

type Tag = {
    name: string;
};

// ПРИМЕР json файла
const jsonFILE: Test = {
    "name": "Математика 9 класс",
    "subject": "Математика",
    "difficulty": "Средний",
    'topic': 'Матем',
    "problems": [
        {
            "question": "Чему равен корень из 25?",
            "answers": [
                { "value": 3, "is_correct": false },
                { "value": 5, "is_correct": true },
                { "value": 7, "is_correct": false },
                { "value": 25, "is_correct": false }
            ]
        },
        {
            "question": "Решите уравнение: 2x + 3 = 9",
            "answers": [
                { "value": 1, "is_correct": false },
                { "value": 3, "is_correct": true },
                { "value": 5, "is_correct": false }
            ]
        }
    ],
    "tags": [
        { "name": "Алгебра" },
        { "name": "Числа" }
    ],
    "rating": 4.5
}
