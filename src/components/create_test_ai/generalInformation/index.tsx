"use client";

import React, { useState } from "react";
import Link from "next/link";
import Dropdown from "../dropdown";



export function GeneralInformation(){

    const [subject, setSubject] = useState("");
    const [level, setLevel] = useState("");
    const [topic, setTopic] = useState("");

    const subjects = ["Математика", "Физика", "Химия"];
    const levels = ["Начальный", "Средний", "Продвинутый"];
    const topics = ["Алгебра", "Геометрия", "Тригонометрия"];

    return(
        
        <div className="bg-[rgba(20,20,21,1)] rounded-[24px] px-[24px] pt-[24px]">
            <div className="flex justify-between">
                <h1 className="text-white font-['Arial'] font-bold text-[32px] leading-[36.8px]">Общая информация</h1>
                <Link href="" className="flex bg-[rgba(193,239,0,1)] text-black font-sans font-normal text-[16px] leading-[18.4px] rounded-[12px] w-[104px] h-[42px] justify-center items-center">
                    Сохранить
                </Link>
            </div>
            
            <div className="flex space-x-4">
                <Dropdown label="Предмет" placeholder="Выберите категорию" options={subjects} selected={subject} onChange={setSubject} />
                <Dropdown label="Уровень" placeholder="Выберите уровень ученика" options={levels} selected={level} onChange={setLevel} />
                <Dropdown label="Тема" placeholder="Выберите тему теста" options={topics} selected={topic} onChange={setTopic} />
            </div>
        </div>
        
    )
}