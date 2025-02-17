"use client";

import React, { useState } from "react";
import Link from "next/link";
import Dropdown from "../dropdown";
import TextPrompt from "../textPrompt"; // Импортируем компонент textarea
import { DropdownProvider } from "../dropdown/dropdownContext";




export function GeneralInformation(){

    const [subject, setSubject] = useState("");
    const [level, setLevel] = useState("");
    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState(""); // Храним описание

    const subjects = ["Математика", "Русский язык", "Английский язык", "Химия", "Физика", "История", "Биология"];
    const levels = ["Начальный", "Средний", "Продвинутый"];
    const topics = ["ОГЭ", "Рациональные уравнения", "Четные и нечетные функции", "Комбинаторика", "Статистика", "Линейные неравенства", "Квадратные уравнения"];

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
        
        <div className="bg-secondaryBackground rounded-[24px] px-[24px] pt-[24px] pb-[24px] mb-[24px]">
            <div className="flex justify-between">
                <h1 className="text-white font-['Arial'] font-bold text-[32px] leading-[36.8px]">Общая информация</h1>
                <Link href="" className="flex bg-[rgba(193,239,0,1)] text-black font-sans font-normal text-[16px] leading-[18.4px] rounded-[12px] w-[104px] h-[42px] justify-center items-center">
                    Сохранить
                </Link>
            </div>
            
            <div className="flex space-x-4 mt-[16px]">
                <Dropdown id="dropdown1" label="Предмет" placeholder="Выберите категорию" options={subjects} selected={subject} onChange={setSubject} />
                <Dropdown id="dropdown2" label="Уровень" placeholder="Выберите уровень ученика" options={levels} selected={level} onChange={setLevel} />
                <Dropdown id="dropdown3" label="Тема" placeholder="Выберите тему теста" options={topics} selected={topic} onChange={setTopic} />
            </div>

            <div className="mt-[15px]">
                <TextPrompt label="Описание" placeholder="Дайте описание для детальной проработки теста ИИ" isDescription={true} value={description} onChange={(e) => setDescription(e.target.value)} /> {/* Подключаем textarea */}
            </div>
        </div>
        
    )
}