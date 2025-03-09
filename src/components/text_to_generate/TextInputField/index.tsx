'use client';

import { useGenerateQuestions } from "@/store/GenerateQuestions/GenerateQuestions";


export const TextInputField = () => {
  const { text, setText } = useGenerateQuestions();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

    // зачем?
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;

    setText(e.target.value);
  };

  return (
    <div className="w-full bg-[#141415] p-6 rounded-[24px] shadow-md mb-4 relative">
      <textarea
        value={text}
        onChange={handleInputChange}
        className="bg-[#141415] p-5 rounded-[12px] w-full min-h-[100px] text-white resize-none overflow-hidden text-center text-lg focus:outline-none focus:ring-1 focus:ring-[rgba(193,239,0,1)] focus:border-transparent sm:p-10"
        placeholder="Вставьте текст для генерации вопросов"
        rows={1}
      />
    </div>
  );
};
