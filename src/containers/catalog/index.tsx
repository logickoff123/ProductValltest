'use client'

import { TestCard } from "@/components/catalog/testBlock/testCard";
import { TestSwiper } from "@/components/catalog/testBlock/testSwiper";
import { Carousel } from "@/components/catalog/carousel";
import SearchBar from "@/components/catalog/searchBar";

export function CatalogContainer() {
    return (
        <div className="w-full h-full bg-mainBackground flex flex-col items-center justify-center gap-10">
            <Carousel />
            <SearchBar />
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