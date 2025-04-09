import CrossButton from '@/components/create_test/CrossButton/crossbutton';
import LinkBox from '@/components/create_test/LinkBox/LinkBox';

const Container = () => {
  return (
    <div className="relative bg-[#141415] w-full max-w-[500px] h-auto flex flex-col justify-start p-6 rounded-[24px] shadow-lg">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="sm:text-4xl font-sans font-bold text-[32px] text-white mb-2">Метод создание теста</h1>
        <div className="cursor-pointer">
          <CrossButton />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <LinkBox
          icon="/create_test/tool-02.svg"
          text="Создание теста самостоятельно"
          link="/create_test_alone/"
          description="Создавайте тесты самостоятельно с детальной проработкой каждого вопроса, чтобы максимально точно соответствовать вашим требованиям и целям обучения"
        />
        <LinkBox
          icon="/create_test/code-01.svg"
          text="Создание теста ИИ"
          link="catalog/create_test_ai/"
          description="Используйте возможности искусственного интеллекта для мгновенного создания тестов, экономя свое время и усилия"
        />
        {/* <LinkBox
          icon="/create_test/question.svg"
          text="Генерация вопросов по тексту"
          link="/text_to_generate/"
          description="Загрузите текст, и искусственный интеллект автоматически сформирует вопросы на его основе — быстро и без лишних действий"
        /> */}
      </div>
    </div>
  );
};

export default Container;