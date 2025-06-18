import React from 'react';
import {Button} from '../ui/button';
// import LoginPage from '@/pages/LoginPage';
import {useNavigate} from 'react-router-dom';
const HomeComp: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Home</h1>
      <p className="text-gray-600 mb-3">This is a reusable component using Tailwind CSS.</p>
      <Button onClick={() => navigate('/login')}>Go to Login</Button>
    </div>
  );
};

export default HomeComp;