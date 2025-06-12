import { Routes, Route } from 'react-router-dom';
import Login from '../pages/LoginPage';      
import RegisterComp from '../components/Registration/RegisterComp';    

export function RouterIndex() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />             {/* Default route */}
      <Route path="/register" element={<RegisterComp />} />             
    </Routes>
  );
}

export default RouterIndex;