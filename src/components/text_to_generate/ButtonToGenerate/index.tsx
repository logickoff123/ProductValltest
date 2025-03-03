'use client';

import Link from 'next/link';

export function GenerateQuestionsButton() {
  return (
    <div className="flex justify-center items-center">
      <Link
        href="/generate_questions"
        className="mb-5 border-2 border-[rgba(193,239,0,1)] text-white text-lg px-4 py-2 rounded-[12px] hover:bg-[rgba(193,239,0,1)] hover:text-black transition duration-200 flex items-center justify-center gap-2 hover:scale-105 transform"
      >
        Сгенерировать вопросы
      </Link>
    </div>
  );
}