import Image from "next/image"

export function RoadmapLanding() {

    return (
        <div className="flex h-full flex-col mb-[80px]">
            <p id="roadmap" className='scroll-mt-[80px] font-inter font-semibold text-xl leading-[24px] text-[rgba(193,239,0,1)] mb-[12px]'>ДОРОЖНАЯ КАРТА</p>
            <p className='h-[44px] font-inter font-semibold text-4xl text-white mb-[40px]'>Наш стратегический план</p>

            <div className="flex justify-center w-full">
                <Image src="/landing/Roadmap.svg" width={0} height={0} sizes="80%" alt="Roadmap" className="w-full h-auto"/>
            </div>

            {/* <div className='flex flex-row mt-[346px]'>
                <div className='w-[33px] h-[33px] flex-none bg-white hover:bg-[rgba(193,239,0,1)] rounded-[100%]'></div>
                <div className='w-[33px] h-[33px] flex-none bg-white hover:bg-[rgba(193,239,0,1)] rounded-[100%]'></div>
                <div className='w-[33px] h-[33px] flex-none bg-white hover:bg-[rgba(193,239,0,1)] rounded-[100%]'></div>
                <div className='w-[33px] h-[33px] flex-none bg-white hover:bg-[rgba(193,239,0,1)] rounded-[100%]'></div>
                <div className='w-[33px] h-[33px] flex-none bg-white hover:bg-[rgba(193,239,0,1)] rounded-[100%]'></div>
                <div className='w-[33px] h-[33px] flex-none bg-white hover:bg-[rgba(193,239,0,1)] rounded-[100%]'></div>
                <div className='w-[33px] h-[33px] flex-none bg-white hover:bg-[rgba(193,239,0,1)] rounded-[100%]'></div>
                <div className='w-[33px] h-[33px] flex-none bg-white hover:bg-[rgba(193,239,0,1)] rounded-[100%]'></div>
            </div> */}
        </div>
    )
}