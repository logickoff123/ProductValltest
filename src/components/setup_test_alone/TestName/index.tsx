'use client';

export const TestName: React.FC = () => {
  return (
    <div className="bg-[#141415] p-6 rounded-[24px] shadow-md mb-6">
      <h1 className="text-3xl text-white font-bold mb-6">Название теста</h1>
      <div className="flex gap-4">

        <button type="button" className="bg-[#1C1C1D] text-white text-lg px-4 py-3 rounded-[12px] hover:bg-[rgba(193,239,0,1)] hover:text-black transition duration-200 flex items-center justify-center group hover:scale-105 transform">
          <img src="./setup_test_alone/download.svg" alt="Download Icon" className="h-6 w-6 transition duration-200 group-hover:filter group-hover:invert" />
          <span className="hidden md:inline ml-2">Скачать.pdf</span>
        </button>

        <button type="button" className="bg-[#1C1C1D] text-white text-lg px-4 py-3 rounded-[12px] hover:bg-[rgba(193,239,0,1)] hover:text-black transition duration-200 flex items-center justify-center group hover:scale-105 transform">
          <img src="./setup_test_alone/share.svg" alt="Share Icon" className="h-6 w-6 transition duration-200 group-hover:filter group-hover:invert" />
          <span className="hidden md:inline ml-2">Поделиться</span>
        </button>

        <button type="button" className="bg-[#1C1C1D] text-white text-lg px-4 py-3 rounded-[12px] border-2 border-[rgba(193,239,0,1)] hover:bg-[rgba(193,239,0,1)] hover:text-black transition duration-200 flex items-center justify-center hover:scale-105 transform">
          Сохранить
        </button>
      </div>
    </div>
  );
};