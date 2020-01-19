import React from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

function TaskContainer() {
  return (
    <div className="container-fluid">
      <div className="row border taskContainer">

        <div className="col-lg-5 col-md-11 col-sm-11 border taskList">
          <TaskList />
        </div>



        <div className="col-lg-5 col-md-11 col-sm-11 border addTask">
          

        <AddTask />

        </div>
      </div>
      </div>
      
  
  );
}

export default TaskContainer;
