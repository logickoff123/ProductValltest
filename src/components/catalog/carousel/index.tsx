'use client'

import { useState } from "react";
import Image from "next/image";

export function Carousel({ images = ["/catalog/carousel/img1.png", "/catalog/carousel/img2.png", "/catalog/carousel/img3.png"] }: { images?: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="flex items-center justify-center">

            <div className="relative w-[700px] h-[350px] overflow-hidden">
                {/* Картинки */}
                <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((src, index) => (
                        <Image key={index} src={src} alt={`Slide ${index}`} width={700} height={350} className="flex-shrink-0 w-full h-full object-cover" />
                    ))}
                </div>

                {/* Кнопки */}
                <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded">
                    ◀
                </button>
                <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded">
                    ▶
                </button>
            </div>
        </div>
    );
}
