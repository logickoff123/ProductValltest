import { useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';

const IconInfo = [
    {
        width: 20,
        height: 21,
        path: "/leftHeader/homeIcon.svg",
        href: '/catalog'
    },
    {
        width: 24,
        height: 24,
        path: "/leftHeader/WorkShopIcon.svg",
        href: "/catalog/workshop"
    },
    {
        width: 24,
        height: 24,
        path: "/leftHeader/SettingsIcon.svg",
        href: '/catalog/settings'
    }
];

const IconLink = ({ href, src, width, height }: { href: string, src: string, width: number, height: number }) => {
    const [isActive, setIsActive] = useState(false);
    const pathName = usePathname()

    const getUpdatedSrc = (src: string, isActive: boolean) => {
        if (isActive) {
            return src.replace('.svg', 'Green.svg'); // Заменяет .svg на Green.svg
        }
        return src;
    };

    const updatedSrc = getUpdatedSrc(src, pathName === href || isActive);

    return (
        <Link
            href={href}
            className="w-[48px] h-[48px] flex items-center justify-center"
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
        >
            <Image src={updatedSrc} className='' alt="Иконка" width={width} height={height} />
        </Link>
    );
};

export const IconList = () => {
    return (
        <>
            {IconInfo.map((icon, index) => (
                <IconLink
                    key={index}
                    href={icon.href}
                    src={icon.path}
                    width={icon.width}
                    height={icon.height}
                />
            ))}
        </>
    );
};


