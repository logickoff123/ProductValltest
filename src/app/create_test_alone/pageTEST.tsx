'use client';

import { TopHeader } from '../../components/topHeaderMain'; 
import { LeftHeader } from '../../components/leftHeaderMain'; 
import GeneralInfoContainer from '@/containers/create_test_alone/general_info_container/general_info_container'; // Импорт главного контейнера

const Page = () => {
  return (
    <div className="w-full h-full flex">
      <aside className="fixed left-0 top-0 h-screen w-[100px] bg-secondaryBackground p-[26px] hidden md:block">
        <LeftHeader />
      </aside>
      <div className="flex flex-col flex-1 h-full min-w-0 ml-[100px]">
        <header className="shadow-xl z-50 fixed left-[100px] w-[calc(100vw-100px)] shrink-0 bg-mainBackground py-5 px-10 h-[80px]">
          <TopHeader />
        </header>

        <div className="mt-[100px]">
          <GeneralInfoContainer /> 
        </div>
      </div>
    </div>
  );
};

export default Page;