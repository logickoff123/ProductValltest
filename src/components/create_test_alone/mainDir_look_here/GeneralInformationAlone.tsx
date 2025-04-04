"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Test } from '@/types/Test/test';
import { useTestCreateAlone } from "@/store/create_test/CreateTestAlone";

export function GeneralInformationAlone() {
    const { subject, difficulty, topic } = useTestCreateAlone((state) => state.creationInfo);
    const setInfo = useTestCreateAlone((state) => state.setInfo);
    const creationInfo = useTestCreateAlone((state) => state.creationInfo);
    const isTestOptionsValid = useTestCreateAlone((state) => state.isTestOptionsValid);

    useEffect(() => {
        setInfo({ subject, difficulty, topic });
    }, [subject, difficulty, topic, setInfo, isTestOptionsValid]);

    return (
        <div className="bg-secondaryBackground rounded-[24px] px-[24px] pt-[24px] pb-[24px] mb-[24px]">
            <div className="flex justify-between">
                <h1 className="text-white font-['Arial'] font-bold text-[32px] leading-[36.8px]">
                    Общая информация
                </h1>
                <Link 
                    onClick={() => console.log({ 
                        creationInfo: creationInfo, 
                        isTestOptionsValid: isTestOptionsValid() 
                    })} 
                    href="" 
                    className="flex bg-[rgba(193,239,0,1)] text-black font-sans font-normal text-[16px] leading-[18.4px] rounded-[12px] w-[104px] h-[42px] justify-center items-center"
                >
                    Сохранить
                </Link>
            </div>

            <div className="flex gap-4 mt-[16px]">
                <div className="flex flex-col space-y-1 w-full max-w-[260px]">
                    <label className="text-white text-[20px] font-arial">Предмет</label>
                    <div className="relative">
                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setInfo({ subject: e.target.value })}
                            placeholder="Выберите категорию"
                            className="w-full p-3 bg-[#1C1C1D] text-white placeholder:text-[#49494A] border-[#1C1C1D] rounded-[12px] focus:border-[#C1EF00] focus:outline-none"
                        />
                    </div>
                </div>

                <div className="flex flex-col space-y-1 w-full max-w-[260px]">
                    <label className="text-white text-[20px] font-arial">Уровень</label>
                    <div className="relative">
                        <input
                            type="text"
                            value={difficulty}
                            onChange={(e) => setInfo({ difficulty: e.target.value as Test["difficulty"] })}
                            placeholder="Выберите уровень ученика"
                            className="w-full p-3 bg-[#1C1C1D] text-white placeholder:text-[#49494A] border-[#1C1C1D] rounded-[12px] focus:border-[#C1EF00] focus:outline-none"
                        />
                    </div>
                </div>

                <div className="flex flex-col space-y-1 w-full max-w-[260px]">
                    <label className="text-white text-[20px] font-arial">Тема</label>
                    <div className="relative">
                        <input
                            type="text"
                            value={topic}
                            onChange={(e) => setInfo({ topic: e.target.value })}
                            placeholder="Выберите тему теста"
                            className="w-full p-3 bg-[#1C1C1D] text-white placeholder:text-[#49494A] border border-[#1C1C1D] rounded-[12px] focus:border-[#C1EF00] focus:outline-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}