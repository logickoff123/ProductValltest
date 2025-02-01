import { TestCard } from "@/components/catalog/testBlock/testCard";
import { TestSwiper } from "@/components/catalog/testBlock/testSwiper";

export function CatalogContainer(){
    return(
        <div className="w-full h-full bg-mainBackground">

            <TestSwiper blockName="Программирование">
                <TestCard/>
                <TestCard/>
                <TestCard/>
                <TestCard/>
                <TestCard/>
                <TestCard/>
            </TestSwiper>
            
            
            
        </div>
    )
}