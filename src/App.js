import React from "react";
import "./App.css";
import Title from './components/headers/Title';
import Time from './components/Time/Time';
import TaskCount from "./components/task/TaskCount";
import TaskList from "./components/task/TaskList";
import AddTask from "./components/task/AddTask";
import uuidv4 from "uuid/v4";

class App extends React.Component {
  state = {
    tasks: [
      // { id: 12345, description: 'this is a task', completed: false, starred: false },
      // { id: 45678, description: 'this is another task', completed: false, starred: false }
    ]
  };

  //this function will fire when the component loads on the screen
  //this can be used in any component 
  componentDidMount = () => {
    console.log("app loaded");
  }


  addTask = taskDescription => {     //defining task that is to be added
    const taskToAdd = {
      id: uuidv4(),
      description: taskDescription,
      completed: false,
      starred: false
    };
    const currentTasks = this.state.tasks;     //get current list of tasks from state
    currentTasks.push(taskToAdd);    //add the new task onto the array of tasks in state
    this.setState({
      tasks: currentTasks   //updating the state 
    });
  };



  completeTask = taskId => {
    const tasksBeingUpdated = this.state.tasks;     //Find task that needs to be updated 
    for (let i = 0; i < tasksBeingUpdated.length; i++) { //looping through the array of tasks
      const task = tasksBeingUpdated[i]; //looking at each individual one
      if (task.id === taskId) { //if the task id matches the taskID passed in
        task.completed = true;  //mark task completed as true
        //need to ensure the counter is
        break;
      }
    }
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


  starTask = taskId => {
    const starredTask = this.state.tasks;
    for (let i = 0; i < starredTask.length; i++) {
      const task = [i];
      if (task.id === taskId) {
        task.starred = true;
        break;
      }
    }
    this.setState({
      tasks: starredTask
    })
    // console.log('task was starred');
  };




  render() {
    return (
      <div className="container">


        <div className="row">
          <div className="col">
            <Title />
          </div>
          <div className="col">
            <Time />
          </div>
        </div>



        <div className="row rounded">

          <div className="col-lg-6 col-md-12 col-sm-12 rounded addTask">
            <h2>Add a task: </h2>
            <AddTask addTaskFunc={this.addTask} />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 rounded taskList">
            <TaskCount taskCount={this.state.tasks.length} />
            <TaskList
              taskCollection={this.state.tasks}
              deleteTaskFunc={this.deleteTask}
              completedTaskFunc={this.completeTask}
              starTaskFunc={this.starTask}
            />

          </div>
        </div>


      </div>
    );
  }
}

export default App;
