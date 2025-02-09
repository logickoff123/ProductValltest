import Link from 'next/link';

interface LinkBoxProps {
  icon: string;
  text: string;
  link: string;
  description: string;
}

const LinkBox = ({ icon, text, link, description }: LinkBoxProps) => {
  return (
    <Link href={link}>
      <div className="bg-[#1c1c1e] text-white flex flex-col py-4 px-4 rounded-[12px] cursor-pointer hover:bg-[#2c2c2e] transition">
        <div className="flex items-start">
          <div className="bg-white rounded-lg p-2 mr-4">
            <img src={icon} alt="Иконка" className="h-5 w-5 sm:h-5 sm:w-5" />
          </div>
          <h2 className="text-lg font-arial">{text}</h2>
        </div>
        <p className="text-[#49494A]  mt-2 leading-tight text-base font-arial">{description}</p>
      </div>
    </Link>
  );
};

export default LinkBox;
