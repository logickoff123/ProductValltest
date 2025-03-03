export function TaskBlock({ answer, colour, isQuestion = false }: { answer: string | number, colour: string, isQuestion?: boolean }) {
    const colourMap: { [key: string]: string } = {
        lime: "bg-teal-500",
        indigo: "bg-indigo-500",
        sky: "bg-sky-600",
        orange: "bg-orange-500",
        mainBackground: 'bg-mainBackground'
    };

    return (
        <div
            className={`w-full ${colourMap[colour]} ${isQuestion ? "border-2 border-gray-500 text-3xl relative" : "text-2xl"} text-white rounded-xl py-16 flex justify-center text-center items-center`}>
            {answer}
            {isQuestion ? (
                <div className="absolute left-2 bottom-2 bg-black text-white text-sm px-2 py-1 rounded-lg">
                    Вопрос
                </div>
            ) : null}


        </div>
    );
}
