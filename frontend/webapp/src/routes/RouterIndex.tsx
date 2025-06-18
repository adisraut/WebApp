import { Routes, Route } from 'react-router-dom';
import  { SignUpPage } from '../pages/SignUpPage';  
import LoginPage from '@/pages/LoginPage';   
// import RegisterComp from '../pages/RegisterPage'; 
import HomePage from '../pages/HomePage';


export function RouterIndex() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage />} /> {/* Default route */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />                 {/* Fallback route */}             
    </Routes>
  );
}

export default RouterIndex;