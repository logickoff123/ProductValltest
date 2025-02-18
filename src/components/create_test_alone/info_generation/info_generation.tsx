import React, { useState } from 'react';
import Dropdown from '@/components/create_test_alone/dropdown/dropdown'; // Импортируем компонент выпадающего списка

const GeneralInfo: React.FC = () => {
  const [subject, setSubject] = useState<string>('');
  const [level, setLevel] = useState<string>('');
  const [topic, setTopic] = useState<string>('');

  const subjects = [
    { value: 'math', label: 'Математика' },
    { value: 'russian', label: 'Русский язык' },
    { value: 'english', label: 'Английский язык' },
    { value: 'geography', label: 'География' },
  ];

  const levels = [
    { value: 'header', label: 'Начальная школа', isTextOnly: true }, // Текстовый элемент
    { value: 'firstclass', label: '1 класс' },
    { value: 'secondclass', label: '2 класс' },
    { value: 'thirdclass', label: '3 класс' },
    { value: 'fourclass', label: '4 класс' },
    { value: 'footer', label: 'Средняя школа', isTextOnly: true }, // Текстовый элемент
  ];

  const topics = [
    { value: 'oge', label: 'ОГЭ' },
    { value: 'rational_equatic', label: 'Рациональные уравнение' },
    { value: 'еven_and_odd_functions', label: 'Четные и нечетные функции' },
    { value: 'сombinatorics', label: 'Комбинаторика' },
  ];

  return (
    <div className="bg-[#141415] rounded-[24px] p-6 relative flex flex-col w-full max-w-[calc(100%-48px)] mx-auto mt-8 sm:mt-12 sm:px-8 lg:px-16 font-arial">
      {/* Заголовок и кнопка в одном контейнере */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-white text-[32px] text-center sm:text-left">Общая информация</h1>
        <button
          onClick={() => console.log('Saving:', { subject, level, topic })}
          className="bg-[#C1EF00] text-black px-6 py-2 rounded-[12px] hover:bg-[#C1EF00] transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 self-end order-last"
        >
          Сохранить
        </button>
      </div>

      {/* Контейнер с выпадающими списками */}
      <div className="flex flex-col gap-6 lg:flex-row justify-center items-center sm:items-start">
        {/* Dropdown для предметов с поиском */}
        <Dropdown
          label="Предмет"
          value={subject}
          onChange={setSubject}
          options={subjects}
          placeholder="Выберите категорию"
          showSearch={true} 
          searchPlaceholder="Найти категорию"
        />
        <Dropdown
          label="Уровень"
          value={level}
          onChange={setLevel}
          options={levels}
          placeholder="Выберите уровень учеников"
        />
        <Dropdown
          label="Тема"
          value={topic}
          onChange={setTopic}
          options={topics}
          placeholder="Выберите тему теста"
          showSearch={true} 
          searchPlaceholder="Найти тему" 
        />
      </div>
    </div>
  );
};

export default GeneralInfo;