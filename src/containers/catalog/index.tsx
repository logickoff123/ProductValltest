import { TestCard } from "@/components/catalog/testBlock";


export function CatalogContainer(){
    return(
        <div>
            <TestCard
            name="Пивет"
            imgPath = ''
            totalQuestions= {10}
            totalComplited={160}
            lvl="Легкий"

            />
        </div>
    )
}