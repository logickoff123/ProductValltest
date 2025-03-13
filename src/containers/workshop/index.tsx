import { WorkShopCategory } from "@/components/workShop/categoryButtons"
import { CreateTestButton } from "@/components/workShop/createTestButton"
import { SearchBarWorkShop } from "@/components/workShop/searchBar"
import { FilterBar } from "@/components/workShop/filterBar"
import { WideTestCard } from "@/components/workShop/wideTestCard"



export default function WorkShopContainer() {

    return (
        <div className="w-full h-full bg-mainBackground flex flex-col ">
            <div className="gap-10 flex flex-col items-center ">

                <div className="flex justify-between items-center w-full">
                    <SearchBarWorkShop />
                    <CreateTestButton message="Созать тест" />
                </div>

                <WorkShopCategory />
            </div>
            {/* тут будет блок филтров */}
            {/* от него будет меняться отображение карточек */}
            <FilterBar />

            <div className="flex flex-col items-center mt-6">
                <WideTestCard imgPath="/workshop/img.png" />
            </div>


        </div>
    )
}
