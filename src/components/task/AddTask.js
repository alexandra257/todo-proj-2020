import React from "react";
import "./Task.css";

class AddTask extends React.Component {
  state = {
    taskDescription: "Enter your task...",
  };

  addTask = () => {
    this.props.addTaskFunc(this.state.taskDescription);
  };

  taskDescriptionChanged = (event) => {
    this.setState({
      taskDescription: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h3 className="ml-1 mb-3">Add a task: </h3>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your task here"
            onChange={this.taskDescriptionChanged}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={this.addTask}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTask;
