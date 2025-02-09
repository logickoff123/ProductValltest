import { TopHeader } from "@/components/topHeaderMain";
import { LeftHeader } from "@/components/leftHeaderMain";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-full flex">
            {/* Левый хедер */}
            <aside className="fixed left-0 top-0 h-screen w-[100px] bg-secondaryBackground p-[26px] hidden md:block">
                <LeftHeader />
            </aside>

            {/* Главный контейнер */}
            <div className="flex flex-col flex-1 h-full min-w-0 ml-[100px]">
                {/* Верхний хедер */}
                <header className=" shadow-xl z-50 fixed left-[100px] w-[calc(100vw-100px)] shrink-0 bg-mainBackground py-5 px-10">
                    <TopHeader />
                </header>

                {/* Основной контент */}
                <main className=" px-10 flex-1 bg-mainBackground min-w-0 mt-[121px]">
                    {children}
                </main>
            </div>
        </div>
    );
}
