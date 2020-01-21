import React from "react";
import "./Task.css";

class TaskCount extends React.Component {
  render() {
    return (
      <div className="row taskCount">
        <div className="col-12">
          <h2>Tasks left: {this.props.taskCount}</h2>
        </div>
      </div>
    );
  }
}

export default TaskCount;
