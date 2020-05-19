import React from "react";
import "./Task.css";

class TaskCount extends React.Component {
  render() {
    const { taskCollection } = this.props;
    let tasksLeft = taskCollection.filter((task) => !task.completed);
    console.warn({ taskCollection, tasksLeft });

    if (tasksLeft.length === 0) {
      return (
        <h3 className="m-3 pt-2">
          Congrats, you can relax! There are no tasks to do.
        </h3>
      );
    } else {
      return (
        <div className="m-3 pt-2">
          <h3>Tasks left: {tasksLeft.length}</h3>
        </div>
      );
    }
  }
}

export default TaskCount;
