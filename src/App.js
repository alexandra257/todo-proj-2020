import React from 'react';
import './App.css';
import PageHeader from './components/headers/PageHeader';

import TaskContainer from './components/task/TaskContainer';

function App() {
  return (
    <div className="container">
    <PageHeader />
    <TaskContainer /> 
      </div>
  );
}

export default App;
