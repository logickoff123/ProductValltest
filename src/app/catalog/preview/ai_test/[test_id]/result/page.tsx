'use client'
import { useTestSession } from "@/store/TestSession/useTestSession";
import { useRouter } from 'next/navigation';

export default function ResultPage() {
    const checkResults = useTestSession((state) => state.checkResults);
    const resetAllInfo = useTestSession((state) => state.resetAllInfo);
    const { push } = useRouter();

    const { result, total } = checkResults();

    return (
        <div className="flex flex-col bg-mainBackground rounded-xl gap-20">
            <div className="mt-10 text-white text-3xl rounded-xl text-center">
                {`Ваш результат: ${result} из ${total}`}
            </div>

            <button
                className="bg-secondaryBackground rounded-xl py-8 flex items-center justify-center 
                text-white transition-colors duration-150 border-2 border-secondaryBackground hover:border-[#C1EF00]"
                onClick={() => {
                    resetAllInfo();
                    push('/catalog');
                }}
            >
                Принять
            </button>
        </div>
    );
}
