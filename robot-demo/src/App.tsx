import React from 'react';
import logo from './logo.svg';
import './App.css';
import robots from './mockdatas/robots.json'
import Robot from './components/RobotItem'

function App() {
  return (
    <ul>
      {robots.map( r => <Robot id={r.id} name={r.name} email={r.email} />)}
    </ul>
  );
}

export default App;
