import React from 'react';

interface TestCreationMethodProps {
  title: string;
  description: string;
}

const TestCreationMethod: React.FC<TestCreationMethodProps> = ({ title, description }) => {
  return (
    <div className="bg-[#1c1c1e] p-4 rounded-lg">
      <h3 className="text-white font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default TestCreationMethod;
