import React from "react";
import "./App.css";
import Header from "./components/headers/Header";
import TaskCount from "./components/task/TaskCount";
import TaskList from "./components/task/TaskList";
import AddTask from "./components/task/AddTask";
import uuidv4 from 'uuid/v4';

class App extends React.Component {
  state = {
    tasks: [{}
      // { id: uuidv4(), description: "task 1", completed: false },
      // { id: uuidv4(), description: "task 2", completed: false },
      // { id: uuidv4(), description: "task 3", completed: false },
     
    ]
  };

  deleteTask = (taskId) => {
    //Tasks will be deleted when this function executes
   //Identify task that matches the given id & remove it
    // updatedTasks = filtered list of tasks that are not equal to the taskId
    const updatedTasks = this.state.tasks.filter(item => item.id !== taskId)
   
    //(deleted task will have been removed from the array)

    //Update the state with the new collection of tasks
    //here we set the old state of task to a new state called updatedTasks
    //we overwrite the state with updatedTasks
    this.setState({
      tasks: updatedTasks
    });
  }




  addTask = (taskDescription) => {
    //defining task that is to be added
    const taskToAdd = { id: uuidv4(), description: taskDescription, completed: false };
    
    //get current list of tasks from state
    const currentTasks = this.state.tasks;

    //add the taskToAdd to the array of tasks in state
    currentTasks.push(taskToAdd);
    //update the state

    this.setState({
      tasks: currentTasks
    });
  }




  render() {
    return (
      <div className="container">
        <Header />


          <div className="container col-12">
            <div className="row border taskContainer">
              <div className="col-lg-5 col-md-11 col-sm-11 border taskList">

              <TaskCount taskCount={this.state.tasks.length} />

{/* WE PASS THE deleteTaskFunc TO TaskList BECAUSE TASK LIST BRINGS IN THE TASK. 
deleteTaskFunc is the prop, deleteTask function is the value */}
                <TaskList taskCollection={this.state.tasks} deleteTaskFunc={this.deleteTask}/>

              </div>


              <div className="col-lg-5 col-md-11 col-sm-11 border addTask">
              <h2>Add a task: </h2>

                <AddTask addTaskFunc={this.addTask} />
              </div>
            </div>
          </div>
        </div>
    
    );
  }
}

export default App;
