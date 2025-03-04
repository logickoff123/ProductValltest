"use client";

import React, { useState } from "react";
import Link from "next/link";
import Dropdown from "../dropdown";
import TextPrompt from "../textPrompt"; // Импортируем компонент textarea
import { DropdownProvider } from "../dropdown/dropdownContext";




export function TestSettings(){

    const [time, setTime] = useState("");
    const [numberOfPoints, setNumberOfPoints] = useState("");
    const [status, setStatus] = useState("");
    const [testName, setTestName] = useState("");
    const [numberOfQuestions, setNumberOfQuestions] = useState("");
    
    const times = ["Нет ограничений", "5 секунд", "10 секунд", "20 секунд", "30 секунд", "45 секунд", "1 минута", "1,5 минуты", "2 минуты", "3 минуты", "5 минут", "10  минут", "15  минут"];
    const numberOfPointss = ["1 балл", "2 балла", "3 балла", "4 балла", "5 баллов", "6 баллов", "7 баллов", "8 баллов", "9 баллов", "10 баллов", "Другое"];
    const statuss = ["Личный", "Публичный"];

    //  // Функция отправки данных на backend
    // const handleSubmit = async () => {
    //     const requestBody = {
    //     subject,
    //     level,
    //     topic,
    //     description,
    //     };

    //     try {
    //     const response = await fetch("/api/save-test", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(requestBody),
    //     });

    //     if (response.ok) {
    //         console.log("Данные успешно отправлены!");
    //     } else {
    //         console.error("Ошибка при отправке данных");
    //     }
    //     } catch (error) {
    //     console.error("Ошибка запроса:", error);
    //     }
    // };


    return(
        <div className="flex flex-col gap-[24px]">
            <div className="bg-secondaryBackground rounded-[24px] px-[24px] pt-[24px] pb-[24px]">
                <h1 className="text-white font-['Arial'] font-bold text-[32px] leading-[36.8px]">Настройки теста</h1>
                
                <div className="mt-[15px] space-x-4 flex-row flex">
                    <TextPrompt label="Название Теста" placeholder="Напишите название теста" value={testName} onChange={(e) => setTestName(e.target.value)} /> {/* Подключаем textarea */}
                    <TextPrompt label="Количество вопросов" placeholder="Напишите кол-во вопросов" value={numberOfQuestions} onChange={(e) => setNumberOfQuestions(e.target.value)} />
                </div>

                <div className="flex space-x-4 mt-[16px]">
                    <Dropdown id="dropdown4" label="Время" placeholder="Время на одно задание" options={times} selected={time} onChange={setTime} />
                    <Dropdown id="dropdown5" label="Количество баллов" placeholder="Кол-во баллов за 1 задание" options={numberOfPointss} selected={numberOfPoints} onChange={setNumberOfPoints} />
                    <Dropdown id="dropdown6" label="Статус" placeholder="Выберите статус теста" options={statuss} selected={status} onChange={setStatus} />
                </div>
            </div>
            <div>
                <Link href="" className="flex bg-[rgba(193,239,0,1)] text-black font-sans font-normal text-[16px] leading-[18.4px] rounded-[12px] px-[12px] w-fit h-[42px] justify-center items-center">
                    Перейти к тесту
                </Link>
            </div>
        </div>
        
    )
}