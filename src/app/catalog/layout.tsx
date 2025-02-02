import { TopHeader } from "@/components/topHeaderMain";
import { LeftHeader } from "@/components/leftHeaderMain";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full h-full flex overflow-hidden">
            {/* Левый хедер */}
            <aside className=" bg-secondaryBackground p-[26px] hidden md:block shrink-0">
                <LeftHeader />
            </aside>

            {/* Главный контейнер */}
            <div className="flex flex-col flex-1 h-full min-w-0">
                {/* Верхний хедер */}
                <header className="w-full shrink-0 bg-mainBackground py-3 px-10">
                    <TopHeader />
                </header>

                {/* Основной контент */}
                <main className="flex-1 py-3  bg-mainBackground overflow-hidden min-w-0">
                    {children}
                </main>
            </div>
        </div>
    );
}

