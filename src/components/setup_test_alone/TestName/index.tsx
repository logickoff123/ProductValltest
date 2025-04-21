'use client';

import Link from 'next/link';
import { useTestCreateAlone } from '@/store/create_test/CreateTestAlone';

export const TestName = ({ name }: { name: string }) => {
  const { 
    creationInfo: { topic, difficulty },
    setInfo 
  } = useTestCreateAlone();

  const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ topic: e.target.value });
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as "Легкий" | "Средний" | "Сложный" | undefined;
    setInfo({ difficulty: value || undefined });
  };

  return (
    <div className="bg-[#141415] p-6 rounded-3xl shadow-md mb-6 relative">
      <div className="absolute top-6 right-6">
        <Link href="/some-path" className="bg-[#1C1C1D] text-white text-lg px-4 py-3 rounded-xl border-2 border-lime-400 hover:bg-lime-400 hover:text-black transition-all duration-200 flex items-center justify-center hover:scale-105 cursor-pointer"
        >
          Сохранить в мастерскую
        </Link>
      </div>

      <div className="mt-4">
        <h1 className="text-3xl text-white font-bold mb-6">{name}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-1">
            <label className="block text-white text-[20px] font-medium mb-2">Тема</label>
            <input title='topic' type="text" value={topic || ''} onChange={handleTopicChange} className="w-full p-3 rounded-[12px] bg-[#1E1E1F] text-white border border-[#1E1E1F] focus:border-[#C1EF00] focus:outline-none"/>
          </div>

          <div className="md:col-span-1">
            <label className="block text-white text-[20px] font-medium mb-2">Уровень сложности</label>
            <select title='level' value={difficulty || ''} onChange={handleDifficultyChange} className="w-full p-3 rounded-[12px] bg-[#1E1E1F] text-white border border-[#1E1E1F] focus:border-[#C1EF00] focus:outline-none">
              <option value="">Выберите сложность</option>
              <option value="Легкий">Легкий</option>
              <option value="Средний">Средний</option>
              <option value="Сложный">Сложный</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};