'use client';

import { useState } from 'react';
import { TaskForm } from '@/components/setup_test_alone/exercise/TaskForm';
import { AddTaskButton } from '@/components/setup_test_alone/AddTaskButton';
import { TestName } from '@/components/setup_test_alone/TestName';

interface Task {
    question: string;
    answers: { text: string; isCorrect: boolean }[];
  }


  export const CreateTestContainer: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
  
{/* Добавление нового задания */}
    const handleAddTask = () => {
      const newTask: Task = {
        question: '',
        answers: [],
      };
      setTasks([...tasks, newTask]);
    };

{/* Удаление задания */}
    const handleRemoveTask = (taskNumber: number) => {
      const newTasks = tasks.filter((_, index) => index !== taskNumber - 1);
      setTasks(newTasks);
    };
  
{/* Обновление вопроса в задании */}
    const handleQuestionChange = (index: number, question: string) => {
      const newTasks = [...tasks];
      newTasks[index].question = question;
      setTasks(newTasks);
    };
  
{/* Обновление ответов в задании */}
    const handleAnswersChange = (index: number, answers: { text: string; isCorrect: boolean }[]) => {
      const newTasks = [...tasks];
      newTasks[index].answers = answers;
      setTasks(newTasks);
    };
  
    return (
      <div className="min-h-screen">
        <TestName />
  
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
      </div>
    );
  };