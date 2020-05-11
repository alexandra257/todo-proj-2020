import React from "react";
import "./Task.css";
import { styled } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import StarIcon from "@material-ui/icons/Star";

class Task extends React.Component {
  getStyle = () => {
    //setting generic styling of each task
    return {
      background: "white",
      padding: "10px",
      marginTop: "10px",
      marginBottom: "10px",
      borderBottom: "1px #ccc solid",
      // -----------  CONDITIONAL STYLING  -----------
      textDecoration: this.props.item.completed ? "line-through" : "none", // if the task is completed, strike through
      color: this.props.item.completed ? "#5b8c5a" : "grey", // if task.completed is true in state, turn text green
    };
  };

  compButtonStyle = () => {
    return {
      color: this.props.item.completed ? "#5b8c5a" : "grey", // if task.completed is true in state, turn icon green
    };
  };

  //no column in database yet
  // starButtonStyle = () => {
  //   return {
  //     color: this.props.task.starred ? "#feb72b" : "grey", // if task.starred is true in state, turn icon yellow
  //   };
  // };

  deleteClicked = () => {
    this.props.deleteTaskFunc(this.props.item.taskID);
  };

  doneClicked = () => {
    this.props.completedTaskFunc(this.props.item.taskID);
  };

  starTaskClick = () => {
    this.props.starTaskFunc(this.props.item.taskID);
    console.log("star was clicked");
  };

  render() {
    const DeleteButton = styled(DeleteForeverIcon)({
      color: "#FE6B8B", // set colour of delete icon to red
    });

    return (
      <div className="row mx-auto rounded" style={this.getStyle()}>
        <IconButton
          className="col-1 d-flex align-self-left"
          aria-label="star"
          // onClick={() => this.starTaskClick}
        >
          <StarIcon />
        </IconButton>

        <div className="col-9 d-flex align-self-center">
          {this.props.item.description}
        </div>

        <IconButton
          className="col-1 d-flex align-self-right"
          aria-label="tick"
          onClick={() => this.doneClicked()} // calling markComplete when the relevant icon is clicked & passing the id of the selected task up to it in app.js
        >
          {/* applying conditional styling to the completed icon defined above */}
          <AssignmentTurnedInIcon style={this.compButtonStyle()} />
        </IconButton>

        <IconButton
          className="col-1 d-flex align-self-right"
          aria-label="bin"
          onClick={() => this.deleteClicked()} // calling markDelete when the relevant icon is clicked & passing the id of the selected task up to it in app.js
        >
          <DeleteButton />
        </IconButton>
      </div>
    );
  }
}

//   }
// }

export default Task;
