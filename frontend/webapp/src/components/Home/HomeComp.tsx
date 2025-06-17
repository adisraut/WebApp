import React from 'react';

const HomeComp: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Home</h1>
      <p className="text-gray-600">This is a reusable component using Tailwind CSS.</p>
    </div>
  );
};

export default HomeComp;