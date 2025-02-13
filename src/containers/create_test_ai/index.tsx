import { GeneralInformation } from "@/components/create_test_ai/generalInformation"
import { TestSettings } from "@/components/create_test_ai/testSettings"

export function CreateTestAiContainers() {

    return (
        <div className="">
            <GeneralInformation/>
            <TestSettings/>
        </div>
    )
}