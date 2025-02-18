import React from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string; 
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, placeholder = 'Поиск...' }) => {
  return (
    <div className="flex items-center bg-[#141415] border border-[#141415] rounded-[12px] p-2 focus-within:border-[#141415]">
      <img src="/create_test_alone/icn_m_search.svg" alt="search" className="w-5 h-5 mr-2" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#141415] text-[#49494A] placeholder-[#49494A] focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;