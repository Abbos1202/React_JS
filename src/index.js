import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root';
import StudentList from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StudentList>
      <Root />
    </StudentList>
  </React.StrictMode>
);