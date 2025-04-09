"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Dropdown from "../dropdown";
import TextPrompt from "../textPrompt"; // Импортируем компонент textarea
import { DropdownProvider } from "../dropdown/dropdownContext";
import { useTestCreateAI } from "@/store/create_test/CreateTestAI";
import { TestAI } from '@/types/Test/test';




export function GeneralInformation() {

    const subject = useTestCreateAI((state) => state.creationInfoAI.subject);
    const difficulty = useTestCreateAI((state) => state.creationInfoAI.difficulty);
    const topic = useTestCreateAI((state) => state.creationInfoAI.topic);
    const setInfo = useTestCreateAI((state) => state.setInfo);
    const creationInfoAI = useTestCreateAI((state) => state.creationInfoAI);
    const isTestOptionsValid = useTestCreateAI((state) => state.isTestOptionsValid)
    const testName = useTestCreateAI((state) => state.creationInfoAI.name)
    const totalQuestions = useTestCreateAI((state) => state.creationInfoAI.totalQuestions)
    
    useEffect(() => {
        setInfo({ name: testName, totalQuestions })
        isTestOptionsValid()

    }, [setInfo, testName, totalQuestions])


    useEffect(() => {
        setInfo({ subject, difficulty, topic });
    }, [subject, difficulty, topic, setInfo, isTestOptionsValid]);

    // const [description, setDescription] = useState(""); // Храним описание

    const subjects = ["Математика"];
    const levels = ["Легкий", "Средний", "Сложный"];
    const topics = ["Матрицы", "Интегралы", "Вектора", "Пределы"];



    return (

        <div className="bg-secondaryBackground rounded-[24px] px-[24px] pt-[24px] pb-[24px] mb-[24px]">
            <div className="flex justify-between">
                <h1 className="text-white font-['Arial'] font-bold text-[32px] leading-[36.8px]">Общая информация</h1>
                {/* <Link onClick={() => console.log({ creationInfoAI: creationInfoAI, isTestOptionsValid: isTestOptionsValid() })} href="" className="flex bg-[rgba(193,239,0,1)] text-black font-sans font-normal text-[16px] leading-[18.4px] rounded-[12px] w-[104px] h-[42px] justify-center items-center">
                    Сохранить
                </Link> */}
            </div>

            <div className="flex space-x-4 mt-[16px]">
                <TextPrompt label="Название теста" placeholder="Напишите название теста" value={testName} onChange={(e) => setInfo({ name: e.target.value })} />
            </div>

            {/* <div className="mt-[15px]">
                <TextPrompt label="Описание" placeholder="Дайте описание для детальной проработки теста ИИ" isDescription={true} value={description} onChange={(e) => setDescription(e.target.value)} />
            </div> */}

        </div>

    )
}