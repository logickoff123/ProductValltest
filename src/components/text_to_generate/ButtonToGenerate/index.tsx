'use client';

import { useGenerateQuestions } from '@/store/GenerateQuestions/GenerateQuestions';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export function GenerateQuestionsButton() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const text = useGenerateQuestions((state) => state.text);
  const setQuestions = useGenerateQuestions((state) => state.setQuestions);

  const { mutate, isPending } = useMutation({
    mutationKey: ['postText'],
    mutationFn: async () => {
      const response = await axios.post('https://10111897.xyz/api/generate_question_from_text', { text }); // запрос на локал хост, передаю текст в json 
      return response.data.questions;
    },
    onSuccess: (data) => {
      setQuestions(data);
      queryClient.invalidateQueries({ queryKey: ['postText'] }); // делаю данные устаревшими, чтобы юзер заново писал текст в след раз 
      router.push('/generate_questions');
    },
    retryDelay: 15000,
  });

  const handleSubmit = useCallback(() => {
    mutate();
  }, [mutate]);

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleSubmit}
        disabled={isPending}
        className="mb-5 border-2 border-[rgba(193,239,0,1)] text-white text-lg px-4 py-2 rounded-[12px] 
        hover:bg-[rgba(193,239,0,1)] hover:text-black transition duration-200 flex items-center justify-center gap-2 
        hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? 'Генерирую...' : 'Сгенерировать вопросы'}
      </button>
    </div>
  );
}
