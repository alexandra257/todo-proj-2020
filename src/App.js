import React from 'react';
import './App.css';
import PageHeader from './components/headers/PageHeader';
import TaskList from './components/task/TaskList';
import TaskContainer from './components/task/TaskContainer';
import AddTask from './components/task/AddTask';

function App() {
  return (
    <div className="container">
    <PageHeader />
    <TaskContainer> 
      <TaskList />
      <AddTask />
    </TaskContainer>
   

    </div>
  );
}

export default App;
