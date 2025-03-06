"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Test } from '@/types/Test/test';
import Dropdown from "@/components/create_test_ai/dropdown";
import { useTestCreateAlone } from "@/store/create_test/CreateTestAlone";




export function GeneralInformationAlone() {

    const subject = useTestCreateAlone((state) => state.creationInfo.subject);
    const difficulty = useTestCreateAlone((state) => state.creationInfo.difficulty);
    const topic = useTestCreateAlone((state) => state.creationInfo.topic);
    const setInfo = useTestCreateAlone((state) => state.setInfo);
    const creationInfo = useTestCreateAlone((state) => state.creationInfo);
    const isTestOptionsValid = useTestCreateAlone((state) => state.isTestOptionsValid)



    useEffect(() => {
        setInfo({ subject, difficulty, topic });
    }, [subject, difficulty, topic, setInfo, isTestOptionsValid]);


    const subjects = ["Математика", "Русский язык", "Английский язык", "Химия", "Физика", "История", "Биология"];
    const levels = ["Легкий", "Средний", "Сложный"];
    const topics = ["ОГЭ", "Рациональные уравнения", "Четные и нечетные функции", "Комбинаторика", "Статистика", "Линейные неравенства", "Квадратные уравнения"];



    return (

        <div className="bg-secondaryBackground rounded-[24px] px-[24px] pt-[24px] pb-[24px] mb-[24px]">
            <div className="flex justify-between">
                <h1 className="text-white font-['Arial'] font-bold text-[32px] leading-[36.8px]">Общая информация</h1>
                <Link onClick={() => console.log({ creationInfo: creationInfo, isTestOptionsValid: isTestOptionsValid() })} href="" className="flex bg-[rgba(193,239,0,1)] text-black font-sans font-normal text-[16px] leading-[18.4px] rounded-[12px] w-[104px] h-[42px] justify-center items-center">
                    Сохранить
                </Link>
            </div>

            <div className="flex space-x-4 mt-[16px]">
                <Dropdown id="dropdown1" label="Предмет" placeholder="Выберите категорию" options={subjects} selected={subject} onChange={(value) => setInfo({ subject: value })} />
                <Dropdown id="dropdown2" label="Уровень" placeholder="Выберите уровень ученика" options={levels} selected={difficulty} onChange={(value) => setInfo({ difficulty: value as Test["difficulty"] })} />
                <Dropdown id="dropdown3" label="Тема" placeholder="Выберите тему теста" options={topics} selected={topic} onChange={(value) => setInfo({ topic: value })} />
            </div>

        </div>

    )
}