'use client'

import { TestCard } from "@/components/catalog/testBlock/testCard";
import { TestSwiper } from "@/components/catalog/testBlock/testSwiper";

//delete
import { TopHeader } from "@/components/topHeaderMain";
import { LeftHeader } from "@/components/leftHeaderMain";

export function CatalogContainer() {
    return (
        <div className="w-full h-full bg-mainBackground">
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