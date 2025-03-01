'use client';

import React from 'react';
import GeneralInfo from '@/components/create_test_alone/info_generation/info_generation'; // Импорт компонента GeneralInfo
import TestSettingsContainer from '@/components/create_test_alone/test_settings_container/test_settings_container'; // Импорт компонента TestSettings

const GeneralInfoSection: React.FC = () => {
  return (
    <div>
      <GeneralInfo />
    </div>
  );
};

const GeneralInfoContainer: React.FC = () => {

  
  const handleCreateTest = () => {

  };

  return (
    <div className="space-y-8">
      <GeneralInfoSection />
      <TestSettingsContainer /> 

      <div className="flex justify-start mt-8 "> 
        <button
          onClick={handleCreateTest}
          className="bg-[#C1EF00] text-black px-6 py-2 rounded-[12px] hover:bg-[#C1EF00] transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 absolute ml-10"
        >
          Создать тест
        </button>
      </div>
    </div>
  );
};

export default GeneralInfoContainer;