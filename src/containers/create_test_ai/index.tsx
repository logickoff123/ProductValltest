import { GeneralInformation } from "@/components/create_test_ai/generalInformation"
import { TestSettings } from "@/components/create_test_ai/testSettings"
import { DropdownProvider } from "@/components/create_test_ai/dropdown/dropdownContext"

export function CreateTestAiContainers() {

    return (

        <DropdownProvider>
            <div className="">
                <GeneralInformation/>
                <TestSettings/>
            </div>
        </DropdownProvider>
    )
}