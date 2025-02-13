"use client";

import React, { useState } from "react";

interface DropdownProps {
  label: string; // Название, например "Предмет"
  placeholder: string; // "Выберите категорию", "Выберите уровень" и т.д.
  options: string[]; // Список опций
  selected: string; // Текущее выбранное значение
  onChange: (value: string) => void; // Функция для обновления выбранного значения
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  placeholder,
  options,
  selected,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false); // Состояние для отображения списка

  // Открытие/закрытие списка
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Выбор элемента из списка
  const handleSelect = (value: string) => {
    onChange(value); // Обновляем выбранное значение
    setIsOpen(false); // Закрываем меню после выбора
  };

  return (
    <div className="flex flex-col ">
      {/* Заголовок списка (например, "Предмет") */}
      <label className="text-white font-[Arial] font-normal text-[20px] leading-[23px] mb-[8px]">
        {label}
      </label>

      {/* Выпадающий контейнер */}
      <div
        className={` w-[293px] rounded-[12px] ${
          isOpen ? "border-[1px] border-[rgba(193,239,0,1)]" : "border border-transparent"
        }`}
      >
        {/* Основная кнопка меню */}
        <div
          className="h-[42px] pl-[16px] flex items-center justify-between cursor-pointer bg-[rgba(28,28,29,1)] text-[rgba(73,73,74,1)] font-[Arial] font-normal text-[16px] leading-[18.4px] rounded-[12px]"
          onClick={toggleDropdown}
        >
          {selected || placeholder} {/* Если есть выбранный элемент, показываем его, если нет — placeholder */}
          <span className="pr-[16px]">▼</span> {/* Иконка стрелки */}
        </div>

        {/* Выпадающий список (часть того же контейнера) */}
        {isOpen && (
          <div className=" top-full left-0 w-full bg-[rgba(28,28,29,1)] rounded-b-[12px] border-[rgba(193,239,0,1)] shadow-md">
            {/* Первый элемент: "Выберите категорию" */}
            <div
              className="px-4 py-2 text-[rgba(73,73,74,1)] font-[Arial] font-normal text-[16px] leading-[18.4px] cursor-pointer hover:bg-gray-600"
              onClick={() => handleSelect("")} // Сбрасывает выбор
            >
              {placeholder}
            </div>

            {/* Остальные элементы списка */}
            {options.map((option, index) => (
              <div
                key={index}
                className="px-4 py-2 text-[rgba(73,73,74,1)] font-[Arial] font-normal text-[16px] leading-[18.4px] cursor-pointer hover:bg-gray-600"
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
