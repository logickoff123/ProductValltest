"use client";

import React, { useEffect, useState } from "react";
import Dropdown from "../dropdown";
import TextPrompt from "../textPrompt"; // Импортируем компонент textarea
import { useTestCreateAI } from "@/store/create_test/CreateTestAI";
import { useRouter } from 'next/navigation';
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { TestAI } from "@/types/Test/test";
import { useQuery } from "@tanstack/react-query";
import { useTestSession } from "@/store/TestSession/useTestSession";



export function TestSettings() {

    const { push } = useRouter()

    const difficulty = useTestCreateAI((state) => state.creationInfoAI.difficulty);
    const topic = useTestCreateAI((state) => state.creationInfoAI.topic);
    const creationInfoAI = useTestCreateAI((state) => state.creationInfoAI)
    const testName = useTestCreateAI((state) => state.creationInfoAI.name)
    const totalQuestions = useTestCreateAI((state) => state.creationInfoAI.totalQuestions)
    const setInfo = useTestCreateAI((state) => state.setInfo)
    const isTestOptionsValid = useTestCreateAI((state) => state.isTestOptionsValid)

    useEffect(() => {
        setInfo({ name: testName, totalQuestions })
        isTestOptionsValid()

    }, [setInfo, testName, totalQuestions])

    const [isClick, setIsClick] = useState<boolean>(false) // нажали кнопку -> данные ушли на сервер 



    const [testId, setTestId] = useState("")

    // отправляю данные для нейронки
    const postTest = async (newTest: Partial<TestAI>) => {
        const response = await axios.post('http://localhost:8000/api/generate_question', newTest);
        return response.data; // ожидаю, что сервер вернёт { testId: "123" }
    };

    // получаю тест
    //const getTest = async (testId: string) => {
        //const response = await axios.get(`http://localhost:8000/get_test/${testId}`); // ${testId}
        //return response.data; // ожидаю, что сервер вернёт { test: { ...данные теста... } }
    //};

    // отправляю данные для нейронки
    const { mutate, isPending,isSuccess } = useMutation({
        mutationFn: postTest,
        onSuccess: (data) => {
            setTestId(data.testId);
        },
    });

    // получаю тест
//    const { data } = useQuery({
//        queryKey: ['getTest',testId], // заменить на testID
//        queryFn: () => getTest(testId),
//        enabled: !!testId,
//
//    })

    // передаю данные в хранилище сессии, чтобы на след страинцы отображался тест 
    const setProblems = useTestSession((state) => state.setProblems)
    const setTestName = useTestSession((state) => state.setTestName)

    const handleSubmit = async () => {
        setIsClick(true)
        mutate(creationInfoAI)

    }

    // если все отправилось, ТО МЫ ОТПРАВЛЯЕМ ЮЗЕРА НА СТРАНИЦУ С ТЕСТОМ// возможны ошибки 
   useEffect(() => {if (isSuccess) {
       push(`/catalog/preview/ai_test/${testId}`);// поменять на ${testId}
//        if (data?.test) {
//  //           setProblems(data.test.problems);
//  //           setTestName(data.test.name);
        }
   }, [/* data,  */testId, push]);

    // UI ONLY not FUNC
    const [time, setTime] = useState("");
    const [numberOfPoints, setNumberOfPoints] = useState("");
    const [status, setStatus] = useState("");

    const times = ["Нет ограничений", "5 секунд", "10 секунд", "20 секунд", "30 секунд", "45 секунд", "1 минута", "1,5 минуты", "2 минуты", "3 минуты", "5 минут", "10  минут", "15  минут"];
    const numberOfPointss = ["1 балл", "2 балла", "3 балла", "4 балла", "5 баллов", "6 баллов", "7 баллов", "8 баллов", "9 баллов", "10 баллов", "Другое"];
    const statuss = ["Личный", "Публичный"];
    const levels = ["Легкий", "Средний", "Сложный"];
    const topics = ["Матрицы", "Интегралы", "Вектора", "Пределы"];



    return (
        <div className="flex flex-col gap-[24px]">
            <div className="bg-secondaryBackground rounded-[24px] px-[24px] pt-[24px] pb-[24px]">
                <h1 className="text-white font-['Arial'] font-bold text-[32px] leading-[36.8px]">Настройки теста ИИ</h1>

                <div className="mt-[15px] space-x-4 flex-row flex">
                     {/* Подключаем textarea */}
                    <TextPrompt
                        label="Количество вопросов"
                        placeholder="Напишите кол-во вопросов"
                        value={totalQuestions}
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            setInfo({ totalQuestions: value ? Number(value) : 0 });
                        }}
                    />
                </div>

                <div className="flex space-x-4 mt-[16px]">
                    <Dropdown id="dropdown2" label="Уровень" placeholder="Выберите уровень ученика" options={levels} selected={difficulty} onChange={(value) => setInfo({ difficulty: value as TestAI["difficulty"] })} />
                    <Dropdown id="dropdown3" label="Тема" placeholder="Выберите тему теста" options={topics} selected={topic} onChange={(value) => setInfo({ topic: value })} />
                    <Dropdown id="dropdown4" label="Количество вопросов" placeholder="Напишите кол-во вопросов" options={times} selected={time} onChange={setTime} />
                    <Dropdown id="dropdown5" label="Количество баллов" placeholder="Кол-во баллов за 1 задание" options={numberOfPointss} selected={numberOfPoints} onChange={setNumberOfPoints} />
                </div>
            </div>
            <div>
                <button
                    disabled={!isTestOptionsValid() || isClick}
                    onClick={handleSubmit}
                    className={`flex px-[12px] w-fit h-[42px] justify-center items-center rounded-[12px] ${isTestOptionsValid() && !isClick ? "bg-[rgba(193,239,0,1)] text-black" : "bg-gray-500 text-gray-300 cursor-not-allowed"
                        }`}>
                    Перейти к тесту

                </button>

                {/* ИДЕТ ЗАПРОС НА СЕРВЕР, мы ждем, поменять на isClick */}
                {isPending &&
                    <div className=" mt-10 text-center text-white rounded-xl bg-secondaryBackground px-2 py-4 w-1/5">
                        Текст генерируется, ожидайте
                    </div>
                }
            </div>
        </div>

    )
}