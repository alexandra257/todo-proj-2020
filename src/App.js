import React from "react";
import "./App.css";
import Title from './components/headers/Title';
import Time from './components/Time/Time';
import TaskCount from "./components/task/TaskCount";
import TaskList from "./components/task/TaskList";
import AddTask from "./components/task/AddTask";
import axios from "axios";

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
    //FETCH tasks from the API when our app loads 
    //once the get finishes, .then will fire (then is a promise, when get finishes, i promise to get x)
    axios.get('https://oabkodhmw0.execute-api.eu-west-2.amazonaws.com/dev/tasks')
      .then((response) => {
        // handle success
        this.setState({
          tasks: response.data.tasks
        })
      })
      //This executes if the .then fails (TRY / CATCH). the app doesn't stop, we just catch the error
      .catch((error) => {
        // handle error
        console.error(error);
      });

  }


  addTask = taskDescription => {

    const taskToAdd = {
      //no taskID needed because we generate the uuid in the backend
      description: taskDescription,
      completed: 0,
      user_id: "7096d2b7-e612-4b44-a9e2-8e29fc9bed69"
    }

    //tasksToAdd being sent to the backend API as a POST
    //when it succeeds, console log it
    //same endpoint as get
    //passing it our JSON object above (taskToAdd)
    axios.post('https://oabkodhmw0.execute-api.eu-west-2.amazonaws.com/dev/tasks', taskToAdd)
      .then((response) => {

        //tells the front end what the taskID is of the task that gets saved
        taskToAdd.taskId = response.data.task.taskID
        console.log(taskToAdd);


        const currentTasks = this.state.tasks;     //get current list of tasks from state
        currentTasks.push(taskToAdd);    //add the new task onto the array of tasks in state

        //update state
        this.setState({
          tasks: currentTasks
        });

      })

      .catch((error) => {
        console.error(error);
      });


  };



  completeTask = taskId => {

    const taskCompleted = { completed: 1 }

    axios.put(`https://oabkodhmw0.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskId}`, taskCompleted)
      .then((response) => {

        const taskCompleted = this.state.tasks;     //Find task that needs to be updated 
        for (let i = 0; i < taskCompleted.length; i++) { //looping through the array of tasks
          const task = taskCompleted[i]; //looking at each individual one
          if (task.taskID === taskId) { //if the task id matches the taskID passed in
            task.completed = true;  //mark task completed as true
            //need to ensure the counter is
            break;
          }
        }

        this.setState({
          tasks: taskCompleted
        });
      })
      //This executes if the .then fails (TRY / CATCH). the app doesn't stop, we just catch the error
      .catch((error) => {
        // handle error
        console.error(error);
      });
  };


  //WE CAN MANIPULATE STATE HERE & SEND API REQUESTS
  //deleteTask identifies the task with matching id & removes it
  deleteTask = taskId => {
    axios.delete(`https://oabkodhmw0.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskId}`)
      .then((response) => {
        // updatedTasks = filtered list of tasks that are not equal to the taskId
        const updatedTasks = this.state.tasks.filter(item => item.taskID !== taskId);

        this.setState({
          tasks: updatedTasks
        });
      })
      //This executes if the .then fails (TRY / CATCH). the app doesn't stop, we just catch the error
      .catch((error) => {
        // handle error
        console.error(error);
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
