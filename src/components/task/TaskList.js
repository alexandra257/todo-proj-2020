import React from "react";
import "./Task.css";
import Task from "./Task";

class TaskList extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-11 taskBox">
            {/* TASKBOX LOOP BELOW*/}

            {this.props.taskCollection.map(taskItem => (
              <Task
                item={taskItem}
                key={taskItem.id}
                deleteTaskFunc={this.props.deleteTaskFunc}
                completedTaskFunc={this.props.completedTaskFunc}
              />
            )) //prop is 'item'
            }
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
