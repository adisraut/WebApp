import { Routes, Route } from 'react-router-dom';
import Login from '../pages/LoginPage';        

export function RouterIndex() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />             {/* Default route */}            
    </Routes>
  );
}

export default RouterIndex;