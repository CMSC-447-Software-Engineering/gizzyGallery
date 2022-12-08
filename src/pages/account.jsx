import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleLGoToGizzy = async () => {
    try {
      navigate('/gizzyGal');
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className='container account'>
      <h1 className='accountEmail'> {user && user.email}</h1>

      <button onClick={handleLogout} className=''>
        Logout
      </button>
      <button onClick={handleLGoToGizzy} className=''>
        Go To Gallery
      </button>
    </div>
  );
};

export default Account;
