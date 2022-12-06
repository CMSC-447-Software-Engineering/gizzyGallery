import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/home';
import Gizzy from './pages/gizzyGal';
import ResetPassword from './pages/resetPassword';
import { AuthContextProvider } from './context/AuthContext';


function App() {
  return (
    <AuthContextProvider>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/gizzyGal' element={<Gizzy />} />
          <Route path='/passwordRecovery' element={<ResetPassword />} />
      </Routes>  
    </AuthContextProvider>
      
     
    
  );
}

export default App;
