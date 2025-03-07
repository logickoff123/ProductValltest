'use client';

import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { TaskForm } from '@/components/setup_test_alone/exercise/TaskForm';
import { AddTaskButton } from '@/components/setup_test_alone/AddTaskButton';
import { TestName } from '@/components/setup_test_alone/TestName';
import { useTestCreateAlone } from '@/store/create_test/CreateTestAlone';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useTestSession } from '@/store/TestSession/useTestSession';



interface Task {
  question: string;
  answers: { value: string; is_correct: boolean }[];
}


export const CreateTestContainer: React.FC = () => {

  const router = useRouter();

  // провяю, запостил ли юзер тест
  // const [isPost, setIsPost] = useState(false)

  // создание теста и заполнение инфо
  const testName = useTestCreateAlone((state) => state.creationInfo.name)
  const setInfo = useTestCreateAlone((state) => state.setInfo)
  const isTestProblemsValid = useTestCreateAlone((state) => state.isTestProblemsValid())
  const creationInfo = useTestCreateAlone((state) => state.creationInfo)
  // передача данных в TestSession 
  const setProblems = useTestSession((state) => state.setProblems)
  const setTestName = useTestSession((state) => state.setTestName)

  // запрос на сервер расккомментить и вставить внутрь mutateFn

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/CreateTestAlone", creationInfo);
      return response.data; // ожидаю, что сервер вернет объект с id

      // // ✅ Эмулируем серверный ответ с задержкой 1 сек
      // return new Promise((resolve) => {
      //   setTimeout(() => {
      //     resolve({ id: "test123" }); // Принудительно задаем ID теста
      //   }, 1000);
      // });
    },
    onSuccess: (data) => {
      if (data.id) {
        setProblems(tasks);
        setTestName(testName);
        router.push(`/catalog/preview/ai_test/${data.id}`);
      }
    },
    onError: (error) => {
      console.error("Ошибка при создании теста:", error);
    },
  });


  // СОЗДАНИЕ ЗАДАНИЙ
  const [tasks, setTasks] = useState<Task[]>([]);

  {/* Добавление нового задания */ }
  const handleAddTask = () => {
    const newTask: Task = {
      question: '',
      answers: [],
    };
    setTasks([...tasks, newTask]);
  };

  {/* Удаление задания */ }
  const handleRemoveTask = (taskNumber: number) => {
    const newTasks = tasks.filter((_, index) => index !== taskNumber - 1);
    setTasks(newTasks);
  };

  {/* Обновление вопроса в задании */ }
  const handleQuestionChange = (index: number, question: string) => {
    const newTasks = [...tasks];
    newTasks[index].question = question;
    setTasks(newTasks);
  };

  {/* Обновление ответов в задании */ }
  const handleAnswersChange = (index: number, answers: { value: string; is_correct: boolean }[]) => {
    const newTasks = [...tasks];
    newTasks[index].answers = answers;
    setTasks(newTasks);
  };

  // хук на создание теста в testSession + передача данных на сервер 
  const handleCreateTest = () => {
    // setIsPost(true)
    mutate();
  };
  useEffect(() => {
    setInfo({ problems: tasks })
  }, [tasks])

  return (
    <div className="min-h-screen">
      <TestName name={testName} />

      {tasks.map((task, index) => (
        <TaskForm
          key={index}
          taskNumber={index + 1}
          question={task.question}
          answers={task.answers}
          onQuestionChange={(question) => handleQuestionChange(index, question)}
          onAnswersChange={(answers) => handleAnswersChange(index, answers)}
          onRemove={handleRemoveTask}
        />
      ))}

      <div className="mt-4">
        <AddTaskButton onClick={handleAddTask} />
      </div>

      {!isTestProblemsValid &&
        <div className="w-full py-8 flex justify-center text-center items-center rounded-xl text-red-500 border-2 bg-mainBackground border-red-500">
          <p>Необходимо, чтобы у каждого задания был хотя бы два варианта ответа, один из которых правильный</p>
        </div>
      }



      <button
        disabled={isPending || !isTestProblemsValid}
        className={`mt-10 text-lg flex px-[12px] w-fit h-[42px] justify-center items-center rounded-[12px] ${isTestProblemsValid ? "bg-[rgba(193,239,0,1)] text-black" : "bg-gray-500 text-gray-300 cursor-not-allowed"}`}
        onClick={handleCreateTest}>
        Создать тест
      </button>
    </div>
  );
};