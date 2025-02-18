import React, { useState } from 'react';
import Dropdown from '@/components/create_test_alone/dropdown/dropdown'; // Импортируем компонент выпадающего списка

const TestSettingsContainer: React.FC = () => {
  const [setting1, setSetting1] = useState<string>('');
  const [setting2, setSetting2] = useState<string>('');
  const [setting3, setSetting3] = useState<string>('');
  const [setting4, setSetting4] = useState<string>('');

  const settings2 = [
    { value: 'notime', label: 'Нет ограничения' },
    { value: '5seconds', label: '5 секунд' },
    { value: '10seconds', label: '10 секунд' },
    { value: '20seconds', label: '20 секунд' },
    { value: '30seconds', label: '30 секунд' },
  ];

  const settings3 = [
    { value: '1point', label: '1 балл' },
    { value: '2point', label: '2 балла' },
    { value: '3point', label: '3 балла' },
    { value: '4point', label: '4 балла' },
    { value: '5point', label: '5 баллов' },
  ];

  const settings4 = [
    { value: 'private', label: 'Личный' },
    { value: 'public', label: 'Публичный' },
  ];

  return (
    <div className="bg-[#141415] rounded-[24px] p-6 relative flex flex-col w-full max-w-[calc(100%-48px)] mx-auto mt-8 sm:mt-12 sm:px-8 lg:px-16 font-arial">
      {/* Заголовок контейнера */}
      <h1 className="text-white text-[32px] mb-6 text-center sm:text-left">Настройки теста</h1>
      <div className="flex flex-col gap-6 lg:flex-row justify-center items-center sm:items-start">
        {/* Текстовое поле для первой настройки */}
        <div className="flex flex-col space-y-1 w-full max-w-[260px]">
          <label className="text-white text-[20px] font-arial">Название теста</label>
          <div className="relative">
            <div className="w-full bg-[#1C1C1D] border border-[#1C1C1D] rounded-[12px]">
              <input
                type="text"
                value={setting1}
                onChange={(e) => setSetting1(e.target.value)}
                placeholder="Напишите название теста"
                className="w-full p-2 text-[16px] font-arial bg-transparent text-[#C1EF00] placeholder-[#49494A] focus:outline-none"
              />
            </div>
          </div>
        </div>
        <Dropdown
          label="Время"
          value={setting2}
          onChange={setSetting2}
          options={settings2}
          placeholder="Время на 1 задание"
        />
        <Dropdown
          label="Количество баллов"
          value={setting3}
          onChange={setSetting3}
          options={settings3}
          placeholder="кол-во баллов за 1 задание"
        />
        <Dropdown
          label="Статус"
          value={setting4}
          onChange={setSetting4}
          options={settings4}
          placeholder="Выбирите статус теста"
        />
      </div>
    </div>
  );
};

export default TestSettingsContainer;
