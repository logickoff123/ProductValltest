'use client'
import Image from "next/image"
import Link from "next/link"



import { IconList } from "./iconList"
import { CreateTestButton } from "../workShop/createTestButton"

export function LeftHeader() {

    const iconStyle = "w-[48px] h-[48px] flex items-center justify-center"

    return (

        <div className="h-full min-h-max flex flex-col items-center gap-[50px] bg-secondaryBackground max-w-min ">

            <Image src='/leftHeader/LogoIcon.svg' alt="Valltest" width={40} height={45} />

            {/* Создать тест  */}

            <CreateTestButton />

            <div className="flex flex-col gap-5">
                <IconList />
            </div>
        </div>
    )
}