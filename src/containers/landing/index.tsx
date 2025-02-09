import { HeaderLanding } from "@/components/landing/headerLanding"
import { StartLanding } from "@/components/landing/startLanding"

export function LandingContainers() {


    return (
        <div className="pl-[120px] w-screen h-screen flex flex-col ">
            <HeaderLanding />
            <StartLanding />
            
        </div>
    )
}