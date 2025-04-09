'use client'

import { DropdownProvider } from "@/components/create_test_ai/dropdown/dropdownContext"
import { GeneralInformationAlone } from "@/components/create_test_alone/mainDir_look_here/GeneralInformationAlone"
import { TestSettingsAlone } from "@/components/create_test_alone/mainDir_look_here/TestSettinsAlone"
import Link from "next/link" 

export default function CreateTestAlonePage() {

    const handleCreateTest = () => {

    };

    return (

        <DropdownProvider>
            <div className="">
                <GeneralInformationAlone />
                {/* <TestSettingsAlone /> */}
            </div>
        
            <div className="flex justify-start mt-[24px] ">
                <Link
                onClick={handleCreateTest}
                href={'/setup_test_alone'}
                className="h-[54px] w-[210px] bg-[#C1EF00] text-black flex justify-center items-center rounded-[12px] hover:bg-[#C1EF00] transition-colors focus:outline-none 
                focus:ring-2 focus:ring-green-500 absolute font-sans font-bold text-[20px]"
                >Создать тест</Link>
            </div>
        </DropdownProvider>
    )
}