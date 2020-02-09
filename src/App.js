import React from "react";
import "./App.css";
import Header from "./components/headers/Header";
import TaskCount from "./components/task/TaskCount";
import TaskList from "./components/task/TaskList";
import AddTask from "./components/task/AddTask";
import uuidv4 from "uuid/v4";

class App extends React.Component {
  state = {
    tasks: []    
  };




  addTask = taskDescription => {     //defining task that is to be added
    const taskToAdd = {
      id: uuidv4(),
      description: taskDescription,
      completed: false
    };



    const currentTasks = this.state.tasks;     //get current list of tasks from state
    currentTasks.push(taskToAdd);    //add the new task onto the array of tasks in state
    this.setState({
      tasks: currentTasks   //updating the state 
    });
  };


  completeTask = taskId => {
//Find task that needs to be updated
const tasksBeingUpdated = this.state.tasks;
//Update a property on the identified task
for(let i = 0; i < tasksBeingUpdated.length; i++){ //looping through the array of tasks
  const task = tasksBeingUpdated[i]; //looking at each individual one

  if(task.id === taskId) { //if the task id matches the taskID passed in
    task.completed = true;  //mark task completed as true
    break;
  }
}
//Update state to reflect changes

  this.setState({
    tasks: tasksBeingUpdated
  })
}


  //deleteTask identifies the task with matching id & removes it
  deleteTask = taskId => {     
    const updatedTasks = this.state.tasks.filter(item => item.id !== taskId);     // updatedTasks = filtered list of tasks that are not equal to the taskId
    this.setState({
      tasks: updatedTasks      //here we update & overwrite the state to a new state called updatedTasks
    });
  };



 



  render() {
    return (
      <div className="container">
        <Header />

        <div className="container col-12">
          <div className="row border taskContainer">
            <div className="col-lg-5 col-md-11 col-sm-11 border taskList">
              <TaskCount taskCount={this.state.tasks.length} />

              {/* pass deleteTaskFunc to TaskList because Task.js is a child of this component. deleteTaskFunc is the prop*/}
              <TaskList
                taskCollection={this.state.tasks}
                deleteTaskFunc={this.deleteTask}
                completedTaskFunc={this.completeTask}
              />
            </div>

            <div className="col-lg-5 col-md-11 col-sm-11 ml-4 border addTask">
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
