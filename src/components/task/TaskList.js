import React from "react";
import './Task.css';
import TaskCount from "./TaskCount";

class TaskList extends React.Component {
  render() {
    return (
        <div className="taskList">
          <TaskCount />
        </div>
    );
  }
}

export default TaskList;