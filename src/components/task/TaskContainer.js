import React from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

function TaskContainer() {
  return (
    <div className="container">
      <div className="row taskContainer">
        
        <div className="col-lg-5 col-md-12 col-sm-12 taskList">
          <TaskList />
        </div>

        <div className="col-lg-5 col-md-12 col-sm-12 addTask">
          <AddTask />
        </div>
      </div>
    </div>
  );
}

export default TaskContainer;
