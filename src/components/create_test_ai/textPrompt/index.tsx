"use client";

import React from "react";

interface TextPromptProps {
  value: string;
  label: string;
  placeholder: string;
  isDescription?: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextPrompt: React.FC<TextPromptProps> = ({ value, label, placeholder, isDescription = false, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="text-white font-['Arial'] font-normal text-[20px] leading-[23px] mb-[8px]">
        {label}
      </label>
      
      <textarea
        className={`py-[14px] px-[16px] text-white outline-none outline-[1px] focus:outline-[rgba(193,239,0,1)] resize-none placeholder-[rgba(73,73,74,1)] bg-mainBackground ${
          isDescription? 'h-[119px] w-full' : 'flex h-[42px] w-[291px] py-[12px] items-center cursor-pointer text-[rgba(73,73,74,1)] font-[Arial] font-normal text-[16px] leading-[18.4px] rounded-[12px]'
        } rounded-[12px]`}

        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextPrompt;