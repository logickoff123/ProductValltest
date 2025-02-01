import { ReactNode } from "react"



export function TestSwiper(
    {blockName,
    children
    }:{
    blockName:string,
    children: ReactNode

}){

    return(
        <div className="gap-4 scrollbar-hide flex flex-col justify-center items-center">
            <div className="w-full font-roboto text-2xl text-white text-start ">
                {blockName}
            </div>

            <div className="flex gap-4 flex-nowrap overflow-x-auto scroll-snap-x  w-full">
                {children} 
            </div>


        </div>
    )

}