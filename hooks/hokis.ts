import axios from "axios";
import { useMutation } from "@tanstack/react-query";



export interface Test {
    topic: string,
    subject: string,
    level: "Легкий" | "Средний" | "Сложный",
    description?: string,
    name: string,
    countQuestions?: number,
    time: Date,
    numberOfPoints: number,
    status: "Личный" | "Публичный"
}

export async function PostHandTest
    (data: Test) {
    const res = await axios.post("бек", data)
    return res
}