import React from "react";
import './Task.css';
import TaskCount from "./TaskCount";
import Task from "./Task";

class TaskList extends React.Component {
  render() {
    return (
      <div>
          <TaskCount />
          <Task />
          </div>
    );
  }
}

export default TaskList;

