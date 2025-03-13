'use client';

import { AnswerInput } from '@/components/setup_test_alone/exercise/AnswerInput';

interface TaskFormProps {
  taskNumber: number;
  question: string;
  answers: { value: string; is_correct: boolean }[];
  onQuestionChange: (question: string) => void;
  onAnswersChange: (answers: { value: string; is_correct: boolean }[]) => void;
  onRemove: (taskNumber: number) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({
  taskNumber,
  question,
  answers,
  onQuestionChange,
  onAnswersChange,
  onRemove,
}) => {
  const handleRemove = (/* event: React.MouseEvent<HTMLButtonElement> */) => {
    onRemove(taskNumber);
  };

  {/* Удаление ответа */ }
  const handleRemoveAnswer = (index: number) => {
    const newAnswers = answers.filter((_, i) => i !== index);
    onAnswersChange(newAnswers);
  };

  {/* Добавление нового ответа */ }
  const handleAddAnswer = () => {
    onAnswersChange([...answers, { value: '', is_correct: false }]);
  };

  {/* Изменение текста ответа */ }
  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index].value = value;
    onAnswersChange(newAnswers);
  };
  {/* Выбор правильного ответа */ }
  const handleToggleCorrect = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[index].is_correct = !newAnswers[index].is_correct;
    onAnswersChange(newAnswers);
  };

  {/* Автоматическое изменение высоты textarea */ }
  const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onQuestionChange(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="bg-[#141415] p-6 rounded-[24px] shadow-md mb-4 relative">
      <h2 className="text-3xl text-white font-bold mb-6">Задание №{taskNumber}</h2>
      <textarea
        value={question}
        onChange={handleQuestionChange}
        className="bg-[#1C1C1D] p-10 rounded-[12px] w-full min-h-[100px] mb-5 text-white resize-none overflow-hidden text-center text-lg focus:outline-none focus:ring-1 focus:ring-[rgba(193,239,0,1)] focus:border-transparent"
        placeholder="Введите вопрос"
        rows={1}
      />
      {answers.map((answer, index) => (
        <AnswerInput
          key={index}
          index={index}
          value={answer.value}
          onChange={handleAnswerChange}
          onToggleCorrect={handleToggleCorrect}
          isCorrect={answer.is_correct}
          onRemove={handleRemoveAnswer}
        />
      ))}

      <button
        type="button"
        onClick={handleRemove}
        aria-label="Удалить задание"
        className="bg-[#1C1C1D] rounded-[12px] hover:bg-[rgba(193,239,0,1)] absolute top-4 right-5 transition duration-200 flex items-center justify-center w-11 h-11 mx-auto group hover:scale-105 transform"
      >
        <img src='./setup_test_alone/cross.svg' alt='Cross Icon' className='h-6 w-6 transition duration-200 group-hover:filter group-hover:invert' />
      </button>

      <button
        type="button"
        onClick={handleAddAnswer}
        className="bg-[#1C1C1D] rounded-[12px] hover:bg-[rgba(193,239,0,1)] transition duration-200 mt-5 flex items-center justify-center w-11 h-11 mx-auto group hover:scale-105 transform"
      >
        <img src="./setup_test_alone/plus.svg" alt="Plus Icon" className="h-4 w-4 transition duration-200 group-hover:filter group-hover:invert" />
      </button>
    </div>
  );
};
