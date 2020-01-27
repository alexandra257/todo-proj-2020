import React from "react";
import "./Task.css";

class Task extends React.Component {
  deleteClicked = () => {
    this.props.deleteTaskFunc(this.props.item.id);
  };

  doneClicked = () => {
    this.props.completedTaskFunc(this.props.item.id);
  };

  // doneClicked = () => {
  //     alert(`you clicked done button for task ${this.props.item.id}`)
  // }

  render() {
    return (
      <div className="row task">
        <div className="col-12 col-md-8">{this.props.item.description}</div>

        <div className="col-3 col-md-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={this.doneClicked}
          >
            Done
          </button>
        </div>
        <div className="col-3 col-md-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.deleteClicked}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Task;
