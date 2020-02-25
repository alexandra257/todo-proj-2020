import React from "react";
import "./Task.css";

class Task extends React.Component {
  deleteClicked = () => {
    this.props.deleteTaskFunc(this.props.item.id);
  };

  doneClicked = () => {
    // this.props.completedTaskFunc(this.props.item.id);
    this.props.completedTaskFunc(this.props.item.id);
  };

  // doneClicked = () => {
  //     alert(`you clicked done button for task ${this.props.item.id}`)
  // }

  render() {

    let description;

    if (this.props.item.completed) {
      description = <div className="border border-dark completedTask">{this.props.item.description}</div>
    } else {
      description = <div className="border border-dark">{this.props.item.description}</div>

    }


    return (
      <div className="row border border-dark task">
        <div className="col-10 border border-dark">
          {description}

          {!this.props.item.completed && (              //if the task is not completed + the done button is clicked, remove the done button
            <button type="button" className="btn btn-success" onClick={this.doneClicked}>
              Done
          </button>
          )}
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.deleteClicked} >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Task;
