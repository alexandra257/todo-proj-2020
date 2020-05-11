import React from "react";
import "./App.css";
import Title from "./components/headers/Title";
import Time from "./components/headers/Time";
import TaskCount from "./components/task/TaskCount";
import TaskList from "./components/task/TaskList";
import AddTask from "./components/task/AddTask";
import axios from "axios";

class App extends React.Component {
  state = {
    tasks: [],
  };

  //this function will fire when the component loads on the screen
  //this can be used in any component
  componentDidMount = () => {
    axios
      .get("https://oabkodhmw0.execute-api.eu-west-2.amazonaws.com/dev/tasks")
      .then((response) => {
        // if get request is successful, then respond with the tasks (then is a promise)
        this.setState({
          tasks: response.data.tasks,
        });
      })
      //catch method returns a promise, dealing with rejected cases only.
      .catch((error) => {
        console.error(error); //log out the error thrown
      });
  };

  //when a task is added to our list, addTask fires a POST request
  addTask = (taskDescription) => {
    const taskToAdd = {
      //no taskID needed because we generate it using uuid in the backend
      description: taskDescription,
      completed: 0,
      user_id: "7096d2b7-e612-4b44-a9e2-8e29fc9bed69",
    };

    //uses the same endpoint as a get request
    axios
      .post(
        "https://oabkodhmw0.execute-api.eu-west-2.amazonaws.com/dev/tasks",
        taskToAdd
      )
      .then((response) => {
        //tells the front end what the taskID is of the task that gets saved
        taskToAdd.taskId = response.data.task.taskID;
        console.log(taskToAdd);

        const currentTasks = this.state.tasks; //get current list of tasks from state
        currentTasks.push(taskToAdd); //add the new task object onto the end of the array of tasks

        this.setState({
          tasks: currentTasks,
        });
      })

      .catch((error) => {
        console.error(error);
      });
  };

  completeTask = (taskId) => {
    const taskCompleted = { completed: 1 };

    axios
      .put(
        `https://oabkodhmw0.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskId}`,
        taskCompleted
      )
      .then((response) => {
        const taskCompleted = this.state.tasks;
        // looping through the array of tasks
        for (let i = 0; i < taskCompleted.length; i++) {
          const task = taskCompleted[i]; // looking at each individual one & storing it in a variable called task
          // if the taskID that we're currently iterating over matches taskID passed in
          if (task.taskID === taskId) {
            task.completed = !task.completed; // set the boolean value to the opposite of it's current value
            break;
          }
        }
        this.setState({
          tasks: taskCompleted,
        });
      })
      //This executes if the .then fails (TRY / CATCH). the app doesn't stop, we just catch the error
      .catch((error) => {
        // handle error
        console.error(error);
      });
  };

  deleteTask = (taskId) => {
    axios
      .delete(
        `https://oabkodhmw0.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskId}`
      )
      .then((response) => {
        // updatedTasks = filtered list of tasks that are not equal to the taskId
        const updatedTasks = this.state.tasks.filter(
          (item) => item.taskID !== taskId
        );

        this.setState({
          tasks: updatedTasks,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //this is new - currently no starred column in database
  // starTask = (taskId) => {
  //   const starredTask = this.state.tasks;
  //   for (let i = 0; i < starredTask.length; i++) {
  //     const task = [i];
  //     if (task.id === taskId) {
  //       task.starred = true;
  //       break;
  //     }
  //   }
  //   this.setState({
  //     tasks: starredTask,
  //   });
  // };

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
          <div className="col-lg-6 col-md-12 col-sm-12 pt-4 rounded add-task">
            <AddTask addTaskFunc={this.addTask} />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 rounded task-list">
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
