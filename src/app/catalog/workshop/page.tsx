import WorkShopContainer from "@/containers/workshop";
import { WorkshopProvider } from "@/context/workshop";

export default function WorkShopPage() {

    return (
        <WorkshopProvider>
            <WorkShopContainer />
        </WorkshopProvider>
    );
}