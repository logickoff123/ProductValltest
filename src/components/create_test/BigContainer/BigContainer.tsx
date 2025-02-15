
import CrossButton from '@/components/create_test/CrossButton/crossbutton';
import LinkBox from '@/components/create_test/LinkBox/LinkBox';

const Container = () => {

  return (
    <div className="relative bg-[#141415] w-full max-w-[500px] h-auto sm:h-[420px] flex flex-col justify-between p-4 rounded-[24px] shadow-lg">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 font-arial">Метод создание теста</h1>
        <div className="cursor-pointer">
          <CrossButton />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <LinkBox
          icon="create_test/Icon.svg"
          text="Создание теста самостоятельно"
          link="/text-a"
          description="Создавайте тесты самостоятельно с детальной проработкой каждого вопроса, чтобы максимально точно соответствовать вашим требованиям и целям обучения"
        />
        <LinkBox
          icon="create_test/code-01.svg"
          text="Создание текста ИИ"
          link="/text-ai"
          description="Используйте возможности искусственного интеллекта для мгновенного создания тестов, экономя свое время и усилия"
        />
      </div>
    </div>
  );  
};

export default Container;
