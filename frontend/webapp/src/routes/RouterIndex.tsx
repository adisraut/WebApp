import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';      
// import RegisterComp from '../pages/RegisterPage';
import RegisterPage from '../pages/RegisterPage';  
import HomePage from '../pages/HomePage';
import RegisterComp from '@/components/Registration/RegisterComp';

export function RouterIndex() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />             {/* Default route */}
      <Route path="/register" element={<RegisterComp />} />
      <Route path="/home" element={<HomePage />} />                 {/* Fallback route */}             
    </Routes>
  );
}

export default RouterIndex;