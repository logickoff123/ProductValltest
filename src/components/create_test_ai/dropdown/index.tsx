"use client";

import React from "react";
import { useDropdownContext } from "./dropdownContext";

interface DropdownProps {
  id: string; // Уникальный идентификатор для каждого dropdown
  label: string;
  placeholder: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  id,
  label,
  placeholder,
  options,
  selected,
  onChange,
}) => {
  const { openDropdownId, setOpenDropdownId } = useDropdownContext();
  const isOpen = openDropdownId === id;

  // Переключаем открытие/закрытие, учитывая общий контекст
  const toggleDropdown = () => {
    setOpenDropdownId(isOpen ? null : id);
  };

  const handleSelect = (value: string) => {
    onChange(value);
    setOpenDropdownId(null); // Закрываем dropdown после выбора
  };

  return (
    <div className="flex flex-col">
      <label className="text-white font-['Arial'] font-normal text-[20px] leading-[23px] mb-[8px]">
        {label}
      </label>

      <div
        className={`relative w-[291px] rounded-[12px]`}
      >
        <div
          className={`h-[42px] px-[16px] flex items-center justify-between cursor-pointer bg-mainBackground text-[rgba(73,73,74,1)] font-[Arial] font-normal text-[16px] leading-[18.4px] rounded-[12px] ${
            isOpen ? "border-[1px] border-[rgba(193,239,0,1)] border-b-0 rounded-b-[0px]" : "border border-transparent"
          } ${
            selected ? "text-white" : "text-[rgba(73,73,74,1)]"
          }`}
          onClick={toggleDropdown}
        >
          {selected || placeholder}
          <span className="text-white">{isOpen ? "▲" : "▼"}</span> {/* Стрелка или крестик */}
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[rgba(28,28,29,1)] rounded-b-[12px] border-t-0 border border-[rgba(193,239,0,1)] z-10 max-h-[186px] overflow-y-auto scrollbar-hidden">
            <div
              className="px-4 py-2 text-[rgba(73,73,74,1)] font-['Arial'] font-normal text-[16px] leading-[18.4px] cursor-pointer hover:bg-gray-600"
              onClick={() => handleSelect("")}
              hidden
            >
              {placeholder}
            </div>
            {options.map((option, index) => (
              <div
                key={index}
                className="px-[16px] py-[14px] text-white font-['Arial'] font-normal text-[16px] leading-[18.4px] cursor-pointer hover:text-[rgba(193,239,0,1)]"
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
