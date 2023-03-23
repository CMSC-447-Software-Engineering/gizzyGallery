import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/homePage';
import LoginPage from './Pages/loginPage';

function WebApp() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/homepage' element={<HomePage />} />
    </Routes>
  );
}

export default WebApp;