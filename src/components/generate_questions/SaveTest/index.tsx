'use client';

export const SaveTest: React.FC = () => {
  return (
    <div className="bg-[#141415] p-6 rounded-[24px] shadow-md mb-6">
      <div className="flex items-center justify-between">
      <h1 className="text-3xl text-white font-bold hidden lg:block">Вопросы по загруженному тексту</h1>
      <h1 className="text-3xl text-white font-bold block lg:hidden">Вопросы</h1>
        <button
          type="button"
          className="bg-[#1C1C1D] text-white text-lg px-4 py-3 rounded-[12px] border-2 border-[rgba(193,239,0,1)] hover:bg-[rgba(193,239,0,1)] hover:text-black transition duration-200 items-center justify-center hover:scale-105 transform hidden sm:inline-flex"
        >
          Сохранить
        </button>
        
        <button
          type="button"
          className="group bg-[#1C1C1D] p-3 rounded-[12px] border-2 border-[rgba(193,239,0,1)] hover:bg-[rgba(193,239,0,1)] transition duration-200 items-center justify-center hover:scale-105 transform inline-flex sm:hidden"
        >
          <img src="./setup_test_alone/download.svg" alt="Save Icon" className="h-6 w-6 transition duration-200 group-hover:filter group-hover:invert"/>
        </button>
      </div>
    </div>
  );
};