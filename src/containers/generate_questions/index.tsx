'use client';

import { SaveTest } from '@/components/generate_questions/SaveTest';
import { QuestionForm } from '@/components/generate_questions/QuestionForm';
import { useEffect, useState } from 'react';

interface Task {
  question: string;
}

const mockTasks: Task[] = [
  {
    question: 'Задана функция y=5x-8. Найдите ее значение при x=2',
  },
  {
    question: 'Реши пример: 58 + 45 = ',
  },
];

export const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      setTasks(mockTasks);
    };

    fetchTasks();
  }, []);

  return (
    <div className="p-4">
      <SaveTest />
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <QuestionForm
            key={index}
            taskNumber={index + 1}
            question={task.question}
          />
        ))}
      </div>
    </div>
  );
};