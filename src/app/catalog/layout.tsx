import { TopHeader } from "@/components/topHeaderMain";
import { LeftHeader } from "@/components/leftHeaderMain";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full h-full flex ">
            {/* Левый хедер */}
            <aside className="fixed left-0 top-0 h-screen  bg-secondaryBackground p-[26px] hidden md:block">
                <LeftHeader />
            </aside>




            {/* Главный контейнер */}
            <div className="flex flex-col flex-1 h-full min-w-0 ml-[74px]">
                {/* Верхний хедер */}
                <header className="w-full shrink-0 bg-mainBackground py-3 px-10">
                    <TopHeader />
                </header>

                {/* Основной контент */}
                <main className="flex-1 py-3  bg-mainBackground min-w-0">
                    {children}
                </main>
            </div>
        </div>
    );
}

