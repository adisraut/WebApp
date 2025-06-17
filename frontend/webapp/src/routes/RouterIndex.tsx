import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';      
import HomeComp from '../components/Home/HomeComp';
// import RegisterComp from '../pages/RegisterPage';    
import HomePage from '../pages/HomePage';

export function RouterIndex() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />             {/* Default route */}
      {/* <Route path="/register" element={<RegisterPage />} /> */}
      <Route path="/home" element={<HomePage />} />                 {/* Fallback route */}             
    </Routes>
  );
}

export default RouterIndex;