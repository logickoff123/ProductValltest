import { HeaderLanding } from "@/components/landing/headerLanding"
import { StartLanding } from "@/components/landing/startLanding"
import { OpportunitiesLanding } from "@/components/landing/opportunitiesLanding"
import { AboutUsLanding } from '../../components/landing/aboutUsLanding/index';
import { RoadmapLanding } from '../../components/landing/roadmapLanding/index';
import { ContactsLanding } from '../../components/landing/contactsLanding/index';
import { FooterLanding } from '../../components/landing/footerLanding/index';

export function LandingContainers() {


    return (
        <div className="w-full h-full flex flex-col">
            <HeaderLanding />
            <StartLanding />
            <OpportunitiesLanding />
            <AboutUsLanding/>
            <RoadmapLanding/>
            <ContactsLanding/>
            <FooterLanding/>
        </div>
    )
}