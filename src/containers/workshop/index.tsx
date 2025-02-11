import { WorkShopCategory } from "@/components/workShop/categoryButtons"
import { CreateTestButton } from "@/components/workShop/createTestButton"
import { SearchBarWorkShop } from "@/components/workShop/searchBar"




export default function WorkShopContainer() {

    return (
        <div className="w-full h-full bg-mainBackground flex flex-col items-center  gap-10">
            <div className="flex justify-between items-center w-full">
                <SearchBarWorkShop />
                <CreateTestButton message="Созать тест" />
            </div>

            <WorkShopCategory />
            {/* тут будет блок филтров */}
            {/* от него будет меняться отображение карточек */}

        </div>
    )
}