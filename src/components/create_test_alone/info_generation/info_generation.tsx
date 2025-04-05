import React, { useState } from 'react';

const GeneralInfo: React.FC = () => {
  const [subject, setSubject] = useState<string>('');
  const [level, setLevel] = useState<string>('');
  const [topic, setTopic] = useState<string>('');

  return (
    <div className="bg-[#141415] rounded-[24px] p-6 relative flex flex-col w-full max-w-[calc(100%-48px)] mx-auto mt-8 sm:mt-12 sm:px-8 lg:px-16 font-arial">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-white text-[32px] text-center sm:text-left">Общая информация</h1>
        <button
          onClick={() => console.log('Saving:', { subject, level, topic })}
          className="bg-[#C1EF00] text-black px-6 py-2 rounded-[12px] hover:bg-[#C1EF00] transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 self-end order-last"
        >
          Сохранить
        </button>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row justify-center items-center sm:items-start">

        <div className="w-full">
          <label className="block text-white text-sm font-medium mb-2">Предмет</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Введите предмет"
            className="w-full p-3 rounded-lg bg-[#1E1E1F] text-white border border-[#3E3E3E] focus:border-[#C1EF00] focus:outline-none"
          />
        </div>

        <div className="w-full">
          <label className="block text-white text-sm font-medium mb-2">Уровень</label>
          <input
            type="text"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            placeholder="Введите уровень"
            className="w-full p-3 rounded-lg bg-[#1E1E1F] text-white border border-[#3E3E3E] focus:border-[#C1EF00] focus:outline-none"
          />
        </div>

        <div className="w-full">
          <label className="block text-white text-sm font-medium mb-2">Тема</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Введите тему"
            className="w-full p-3 rounded-lg bg-[#1E1E1F] text-white border border-[#3E3E3E] focus:border-[#C1EF00] focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;