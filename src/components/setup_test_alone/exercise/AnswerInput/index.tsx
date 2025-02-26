'use client';

import React, { useEffect, useRef } from 'react';

interface AnswerInputProps {
  index: number;
  value: string;
  onChange: (index: number, value: string) => void;
  onToggleCorrect: (index: number) => void;
  isCorrect: boolean;
  onRemove: (index: number) => void;
}

export const AnswerInput: React.FC<AnswerInputProps> = ({
  index,
  value,
  onChange,
  onToggleCorrect,
  isCorrect,
  onRemove,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className="relative flex items-start mb-2">
      <button
        type="button"
        onClick={() => onRemove(index)}
        aria-label="Удалить ответ"
        className="bg-[#1c1c1db5] rounded-[12px] hover:bg-[rgba(193,239,0,1)] absolute top-2 right-2 transition duration-200 flex items-center justify-center w-8 h-8 group hover:scale-105 transform"
      >
        <img src="./setup_test_alone/cross.svg" alt="Cross Icon" className="h-4 w-4 transition duration-200 group-hover:filter group-hover:invert" />
      </button>

      <div
        onClick={() => onToggleCorrect(index)}
        className={`absolute left-2 top-2 w-5 h-5 rounded-full border-2 cursor-pointer ${isCorrect ? 'border-black' : 'border-black'}`}
      >
        {isCorrect && (
          <svg className="w-full h-full" viewBox="0 0 24 24">
            <path fill="black" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        )}
      </div>

      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(index, e.target.value)}
        className="bg-[#007C7F] p-9 rounded-[12px] w-full min-h-[100px] flex-grow text-white resize-none overflow-hidden text-center text-lg focus:outline-none focus:ring-2 focus:ring-[rgba(193,239,0,1)] focus:border-transparent"
        placeholder="Введите вариант ответа"
        rows={1}
      />
    </div>
  );
};