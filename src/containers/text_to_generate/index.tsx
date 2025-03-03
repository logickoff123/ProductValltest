'use client';

import { TextInputField } from '@/components/text_to_generate/TextInputField';
import { GenerateQuestionsButton } from '@/components/text_to_generate/ButtonToGenerate';

export const InputContainer = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4 pt-20">
      <TextInputField />
      <div className="mt-8">
        <GenerateQuestionsButton />
      </div>
    </div>
  );
};