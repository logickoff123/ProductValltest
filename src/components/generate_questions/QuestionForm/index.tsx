'use client';

import { useState } from 'react';

interface QuestionFormProps {
  taskNumber: number;
  question: string;
}

export const QuestionForm: React.FC<QuestionFormProps> = ({ taskNumber, question }) => {
  const [answer, setAnswer] = useState('');

  // Обработчик изменения текста в textarea
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
    setAnswer(e.target.value);
  };

  return (
    <div className="bg-[#141415] p-6 rounded-[24px] shadow-md mb-4 relative">
      <h2 className="text-3xl text-white font-bold mb-6">Задание №{taskNumber}</h2>
      <p className="bg-[#1C1C1D] p-10 rounded-[12px] w-full min-h-[100px] mb-5 text-white resize-none overflow-hidden text-center text-lg focus:outline-none focus:ring-1 focus:ring-[rgba(193,239,0,1)] focus:border-transparent">
        {question}
      </p>
      <textarea
        value={answer}
        onChange={handleInputChange}
        className="bg-[#007C7F] p-9 rounded-[12px] w-full min-h-[100px] flex-grow text-white resize-none overflow-hidden text-center text-lg focus:outline-none focus:ring-2 focus:ring-[rgba(193,239,0,1)] focus:border-transparent"
        placeholder="Введите вариант ответа"
        rows={1}
      />
    </div>
  );
};