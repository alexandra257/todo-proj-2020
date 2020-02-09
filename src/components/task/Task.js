import React from "react";
import "./Task.css";
import { thisExpression } from "@babel/types";

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

    if(this.props.item.completed){
      description = <div className="col-12 col-md-8 completedTask">{this.props.item.description}</div>
    } else {
      description = <div className="col-12 col-md-8">{this.props.item.description}</div>

    }
    

    return (
      <div className="row task">
        {description}
        <div className="col-12 col-md-8"></div>

        <div className="col-3 col-md-2">
          {!this.props.item.completed && (              //if the task is not completed + the done button is clicked, remove the done button
          <button type="button" className="btn btn-success" onClick={this.doneClicked}>
            Done
          </button>
          )}
        </div>
        <div className="col-3 col-md-2">
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
