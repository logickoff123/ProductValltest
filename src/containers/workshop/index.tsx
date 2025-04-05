"use client"

import { WorkShopCategory } from "@/components/workShop/categoryButtons"
import { CreateTestButton } from "@/components/workShop/createTestButton"
import { SearchBarWorkShop } from "@/components/workShop/searchBar"
import { FilterBar } from "@/components/workShop/filterBar"
import { WideTestCard } from "@/components/workShop/wideTestCard"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { ImportTest } from "@/types/Test/test"
import { useUserStore } from "@/store/User/userStore"




async function FetchAllTests(userId: number) {
    // ВСТАВИТЬ ССЫЛКУ НА РУЧКУ, передать userId 
    const { data } = await axios.get(`/${userId}`)
    return data
}

export default function WorkShopContainer() {

    const userId = useUserStore((state) => state.userId)

    if (typeof (userId) !== 'number') {
        return (
            <div className="text-white flex items-center justify-center text-4xl">USER НЕ АВТОРИЗОВАН</div>
        )
    }

    const { data, isPending, error } = useQuery({
        queryKey: ['testsByUserId', userId],
        queryFn: () => FetchAllTests(userId),
        staleTime: 60_000,
        enabled: !!userId,
    })



    return (
        <div className="w-full h-full bg-mainBackground flex flex-col ">
            <div className="gap-10 flex flex-col items-center ">
                <div className="flex justify-between items-center w-full">
                    <SearchBarWorkShop />
                    <CreateTestButton message="Созать тест" />
                </div>
                <WorkShopCategory />
            </div>
            <FilterBar />
            <div className="flex flex-col items-center mt-6">
                {isPending && <div>Загрузка...</div>}

                {Array.isArray(data) ? (
                    data.map((test: ImportTest) => (
                        <WideTestCard
                            key={test.link}
                            imgPath="/workshop/img.png"
                            linkToTest={test.link}
                            name={test.name}
                        />
                    ))
                ) : (
                    <div>Мастерская пуста!</div>
                )}
            </div>
        </div>
    )
}