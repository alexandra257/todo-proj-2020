import React from 'react';
import './App.css';
import Header from './components/headers/Header';

import TaskContainer from './components/task/TaskContainer';

function App() {
  return (
    <div className="container">
    <Header />
    <div className="col-12 border">
    <TaskContainer /> 
      </div>
      </div>
  );
}

export default App;
