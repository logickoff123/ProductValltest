'use client'

import { TestCard } from "@/components/catalog/testBlock/testCard";
import { TestSwiper } from "@/components/catalog/testBlock/testSwiper";
import { Carousel } from "@/components/catalog/carousel";

export function CatalogContainer() {
    return (
        <div className="w-full h-full bg-mainBackground flex flex-col gap-10">
            <Carousel />
            <TestSwiper blockName="Программирование">
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
            </TestSwiper>

            <TestSwiper blockName="Программирование">
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
            </TestSwiper>

            <TestSwiper blockName="Программирование">
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
            </TestSwiper>

            <TestSwiper blockName="Программирование">
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
            </TestSwiper>

            <TestSwiper blockName="Программирование">
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
            </TestSwiper>
        </div>
    )
}