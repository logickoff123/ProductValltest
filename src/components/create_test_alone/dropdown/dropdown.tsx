import React, { useState } from 'react';
import SearchInput from '@/components/create_test_alone/search_input/search_input'; // Импортируем компонент поисковой строки

interface Option {
  value: string;
  label: string;
  isTextOnly?: boolean;
}

interface DropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder: string;
  showSearch?: boolean; 
  searchPlaceholder?: string; 
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  showSearch = false,
  searchPlaceholder = 'Найти категорию', 
  
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOptions = options.filter((option) => 
    option.label.toLowerCase().includes(searchTerm.toLowerCase()) && !option.isTextOnly
  );
  const textOnlyOptions = options.filter((option) => option.isTextOnly);

  return (
    <div className="flex flex-col space-y-1 w-full ">
      {/* Заголовок (Предмет, Уровень, Тема) */}
      <label className="text-white text-[20px] font-arial">{label}</label>
      <div className="relative">
        <div
          className={`w-full max-w-[260px] bg-[#1C1C1D] border ${
            isOpen ? 'border-[#C1EF00] rounded-t-[12px]' : 'border-[#1C1C1D] rounded-[12px]'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="p-2 text-[16px] font-arial flex items-center justify-between cursor-pointer whitespace-nowrap">
            <span className={value ? "text-[#C1EF00]" : "text-[#49494A]"}>
              {value ? options.find(option => option.value === value)?.label : placeholder}
            </span>
            <span className="text-[#C1EF00]">
              {isOpen ? (
                <img src="/create_test_alone/open_list.svg" alt="open" />
              ) : (
                <img src="/create_test_alone/close_list.svg" alt="close" />
              )}
            </span>
          </div>
        </div>
        {isOpen && (
          <ul className="absolute z-50 top-full left-0 w-full max-w-[260px] bg-[#1C1C1D] border border-[#C1EF00] border-t-0 rounded-b-[12px] overflow-hidden">
            {showSearch && (
              <li className="p-2">
                <SearchInput
                  value={searchTerm}
                  onChange={setSearchTerm}
                  placeholder={searchPlaceholder}
                />
              </li>
            )}
            {textOnlyOptions
              .filter((option) => option.value === 'header')
              .map((option) => (
                <li
                  key={option.value}
                  className="p-2 text-[16px] font-arial text-white text-center"
                >
                  {option.label}
                </li>
              ))}
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                className="p-2 text-[16px] font-arial text-white cursor-pointer hover:text-[#C1EF00]"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                  setSearchTerm('');
                }}
              >
                {option.label}
              </li>
            ))}
            {textOnlyOptions
              .filter((option) => option.value === 'footer')
              .map((option) => (
                <li
                  key={option.value}
                  className="p-2 text-[16px] font-arial text-white text-center"
                >
                  {option.label}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;