
import { DropdownProvider } from "@/components/create_test_ai/dropdown/dropdownContext"
import { GeneralInformationAlone } from "@/components/create_test_alone/mainDir_look_here/GeneralInformationAlone"
import { TestSettingsAlone } from "@/components/create_test_alone/mainDir_look_here/TestSettinsAlone"

export default function CreateTestAlonePage() {

    return (

        <DropdownProvider>
            <div className="">
                <GeneralInformationAlone />
                <TestSettingsAlone />
            </div>
        </DropdownProvider>
    )
}