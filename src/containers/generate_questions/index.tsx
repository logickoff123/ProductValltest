'use client';

import { useEffect } from 'react';
import { useGenerateQuestions } from '@/store/GenerateQuestions/GenerateQuestions';
import { SaveTest } from '@/components/generate_questions/SaveTest';
import { QuestionForm } from '@/components/generate_questions/QuestionForm';

export const TasksPage = () => {
  const { questions, resetText } = useGenerateQuestions();

  useEffect(() => {
    resetText();
  }, []); // очищаю состояние только при монтировании

  return (
    <div className="p-4">
      <SaveTest />
      <div className="space-y-4">
        {questions.length > 0 ? (
          questions.map((task, index) => (
            <QuestionForm key={index} taskNumber={index + 1} question={task.question} />
          ))
        ) : (
          <p className="text-white text-lg text-center">Нет сгенерированных вопросов</p>
        )}
      </div>
    </div>
  );
};
