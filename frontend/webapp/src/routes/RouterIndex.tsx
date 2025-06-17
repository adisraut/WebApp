import { Routes, Route } from 'react-router-dom';     
import RegisterComp from '../components/Registration/RegisterComp';    

export function RouterIndex() {
  return (
    <Routes>
                  {/* Default route */}
      <Route path="/register" element={<RegisterComp />} /> 

    </Routes>
  );
}

export default RouterIndex;