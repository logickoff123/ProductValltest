import Image from "next/image"
import Link from "next/link"

export function CreateTestButton({ message }: { message?: string }) {

    return (
        <Link href='/create_test' className={`${message ? "flex gap-1 items-center  w-2/3 max-w-44 bg-[#C1EF00]  rounded-xl" : ''}`}>
            <Image src='/leftHeader/CreateNewTestIcon.svg' alt="Создать тест" width={48} height={48} />
            <div className="text-base text-black font-bold">
                {message}
            </div>
        </Link>)

}