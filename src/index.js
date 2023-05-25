import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Student from './Student.jsx';

const students = [
  { id: 1, name: 'Sardor' },
  { id: 2, name: 'Dilshod' },
  { id: 3, name: 'Azizbek' },
  { id: 4, name: 'Firdavs' },
  { id: 5, name: 'Abbos' },
  { id: 6, name: 'Sirojiddin' },
  { id: 7, name: 'Damir' },
  { id: 8, name: 'Abror' },
  { id: 9, name: 'Asror' },
];

ReactDOM.render(
  <React.StrictMode>
    {students.map((value) => {
      return <Student data={value} />;
    })}
  </React.StrictMode>,
  document.getElementById('root')
);