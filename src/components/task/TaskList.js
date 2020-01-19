import React from "react";
import './Task.css';
import TaskCount from "./TaskCount";
import Task from "./Task";

class TaskList extends React.Component {
  render() {
    return (
      <div>
          <TaskCount />
         <div className="row">
          <div className="col-8 taskBox">
            <h1>taskbox</h1>
          <Task />
          </div>
          </div>
          
    );
  }
}

export default TaskList;

