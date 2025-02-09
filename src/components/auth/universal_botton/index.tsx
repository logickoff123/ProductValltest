import Link from 'next/link';

interface UniversalButtonProps {
  text: string;
  href: string;
}

export function UniversalButton({ text, href }: UniversalButtonProps) {
  return (
    <Link
      href={href}
      className="bg-[rgba(193,239,0,1)] text-black rounded-[12px] h-[54px] w-full px-4 py-3 text-lg font-normal leading-none text-center flex items-center justify-center"
    >
      {text}
    </Link>
  );
}