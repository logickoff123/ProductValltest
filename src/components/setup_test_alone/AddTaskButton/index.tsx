'use client';

interface AddTaskButtonProps {
  onClick: () => void;
}

export const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="mb-5 border-2 border-[rgba(193,239,0,1)] text-white text-lg px-4 py-2 rounded-[12px] hover:bg-[rgba(193,239,0,1)] hover:text-black transition duration-200 flex items-center justify-center gap-2 hover:scale-105 transform">
      <span className="text-2xl">+</span>
      <span className="px-1">Добавить задание</span>
    </button>
  );
};