"use client";

import React, { useEffect, useState } from "react";
import TextPrompt from "@/components/create_test_ai/textPrompt";
import { useRouter } from 'next/navigation';
import { useTestCreateAlone } from "@/store/create_test/CreateTestAlone";

export function TestSettingsAlone() {
    const { push } = useRouter();
    const testName = useTestCreateAlone((state) => state.creationInfo.name);
    const setInfo = useTestCreateAlone((state) => state.setInfo);
    const isTestOptionsValid = useTestCreateAlone((state) => state.isTestOptionsValid);

    useEffect(() => {
        setInfo({ name: testName });
        isTestOptionsValid();
    }, [setInfo, testName]);

    const [time, setTime] = useState("");
    const [numberOfPoints, setNumberOfPoints] = useState("");
    const [status, setStatus] = useState("");

    return (
        <div className="flex flex-col gap-[24px]">
            <div className="bg-secondaryBackground rounded-[24px] px-[24px] pt-[24px] pb-[24px]">
                <h1 className="text-white font-['Arial'] font-bold text-[32px] leading-[36.8px]">
                    Настройки теста
                </h1>

                <div className="mt-[15px] space-x-4 flex-row flex">
                    <TextPrompt 
                        label="Название Теста" 
                        placeholder="Напишите название теста" 
                        value={testName} 
                        onChange={(e) => setInfo({ name: e.target.value })} 
                    />
                    
                    <div className="flex flex-col space-y-1 w-full max-w-[260px]">
                        <label className="text-white text-[20px] font-arial">Время</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                placeholder="Время на одно задание"
                                className="w-full p-3 bg-[#1C1C1D] text-white placeholder:text-[#49494A] border border-[#1C1C1D] rounded-[12px] focus:border-[#C1EF00] focus:outline-none"
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-col space-y-1 w-full max-w-[260px]">
                        <label className="text-white text-[20px] font-arial">Количество баллов</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={numberOfPoints}
                                onChange={(e) => setNumberOfPoints(e.target.value)}
                                placeholder="Кол-во баллов за 1 задание"
                                className="w-full p-3 bg-[#1C1C1D] text-white placeholder:text-[#49494A] border border-[#1C1C1D] rounded-[12px] focus:border-[#C1EF00] focus:outline-none"
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-col space-y-1 w-full max-w-[260px]">
                        <label className="text-white text-[20px] font-arial">Статус</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                placeholder="Выберите статус теста"
                                className="w-full p-3 bg-[#1C1C1D] text-white placeholder:text-[#49494A] border border-[#1C1C1D] rounded-[12px] focus:border-[#C1EF00] focus:outline-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <button
                    disabled={!isTestOptionsValid()}
                    onClick={() => push(`/setup_test_alone`)}
                    className={`flex px-[12px] w-fit h-[42px] justify-center items-center rounded-[12px] ${
                        isTestOptionsValid() 
                            ? "bg-[rgba(193,239,0,1)] text-black" 
                            : "bg-gray-500 text-gray-300 cursor-not-allowed"
                    }`}
                >
                    Перейти к тесту
                </button>
            </div>
        </div>
    );
}