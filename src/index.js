import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('login'));

function loginPage(){
  const title = (
    <div className="loginPage">
      <h1>
        Welcome to Gizzy Gallery
      </h1>
    </div>
  );
  return root.render(title);
}

loginPage();
