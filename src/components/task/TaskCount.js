import React from "react";
import "./Task.css";

class TaskCount extends React.Component {
  render() {
    if (this.props.taskCount === 0) {
      return <h3 className="m-3">Congrats, you can relax! There are tasks no to do.</h3>
    } else {
      return (<div className="m-3 taskCount">
        <h2>Tasks left: {this.props.taskCount}</h2>
      </div>
      );
    }

    // return (

    //   { areThereTasks }
    // );
  }
}

export default TaskCount;
