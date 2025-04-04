import Link from 'next/link';

interface UniversalButtonProps {
  text: string;
  href?: string; // теперь необязательно
  type?: "button" | "submit"; // для формы
  onClick?: () => void; // на случай кнопки
}

export function UniversalButton({ text, href, type = "button", onClick }: UniversalButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className="bg-[rgba(193,239,0,1)] text-black rounded-[12px] h-[54px] w-full px-4 py-3 text-lg font-normal leading-none text-center flex items-center justify-center"
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-[rgba(193,239,0,1)] text-black rounded-[12px] h-[54px] w-full px-4 py-3 text-lg font-normal leading-none text-center flex items-center justify-center"
    >
      {text}
    </button>
  );
}
