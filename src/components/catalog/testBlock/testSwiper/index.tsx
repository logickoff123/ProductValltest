'use client'

import { ReactNode } from "react"

export function TestSwiper({ blockName, children }: { blockName: string, children: ReactNode }) {
    return (
        <div className="flex flex-col gap-4 justify-center items-center w-full max-w-full overflow-hidden">
            <div className=" px-10 w-full font-roboto text-2xl text-white text-start">
                {blockName}
            </div>

            <div className=" px-10 flex gap-4 flex-nowrap overflow-x-auto scroll-snap-x snap-x snap-mandatory w-full min-w-0 scrollbar-hide">

                {children}
            </div>
        </div>
    )
}
