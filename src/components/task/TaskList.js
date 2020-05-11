import React from "react";
import "./Task.css";
import Task from "./Task";

class TaskList extends React.Component {
  render() {
    return (
      <div className="col mb-4 rounded task-box">
        {this.props.taskCollection.map((taskItem) => (
          <Task
            item={taskItem}
            key={taskItem.taskID}
            deleteTaskFunc={this.props.deleteTaskFunc}
            completedTaskFunc={this.props.completedTaskFunc}
            starTaskFunc={this.props.starTaskFunc}
          />
        ))}
      </div>
    );
  }
}

export default TaskList;
