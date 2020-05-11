import React from "react";
import "./Task.css";

class TaskCount extends React.Component {
  render() {
    if (this.props.taskCount === 0) {
      return (
        <h3 className="m-3 pt-2">
          Congrats, you can relax! There are no tasks to do.
        </h3>
      );
    } else {
      return (
        <div className="m-3 pt-2">
          <h3>Tasks left: {this.props.taskCount}</h3>
        </div>
      );
    }

    // return (

    //   { areThereTasks }
    // );
  }
}

export default TaskCount;
