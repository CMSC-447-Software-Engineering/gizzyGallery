import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/home';
import Gizzy from './pages/gizzyGal';
import Account from './pages/account';
import ResetPassword from './pages/resetPassword';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './context/ProtectedRoute';


function App() {
  return (
    <AuthContextProvider>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route 
          path='/gizzyGal' 
          element={
            <ProtectedRoute> 
              <Gizzy /> 
            </ProtectedRoute>
          } 
          />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path='/passwordRecovery' element={<ResetPassword />} />
      </Routes>  
    </AuthContextProvider>
          
  );
}

export default App;
