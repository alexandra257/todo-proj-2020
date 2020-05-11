import React from "react";
import "./Task.css";
import { styled } from '@material-ui/core/styles';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import StarIcon from '@material-ui/icons/Star';

class Task extends React.Component {
  deleteClicked = () => {
    this.props.deleteTaskFunc(this.props.item.taskID);
  };


  doneClicked = () => {
    this.props.completedTaskFunc(this.props.item.taskID);

  };

  starTaskClick = () => {
    this.props.starTaskFunc(this.props.item.taskID);
    console.log('star was clicked');
  }

  render() {

    let description;
    if (this.props.item.completed) {
      description = <div className="completedTask">{this.props.item.description}</div>
    } else {
      description = <div>{this.props.item.description}</div>
    }



    const StarButtonOutline = styled(StarBorderIcon)({
      color: '#feb72b',
    });
    // const StarButtonFilled = styled(StarIcon)({
    //   color: '#feb72b',
    // });
    const CompleteButton = styled(DoneOutlineOutlinedIcon)({
      color: '#5b8c5a'
    });
    const DeleteButton = styled(DeleteForeverOutlinedIcon)({
      color: '#FE6B8B'
    });




    return (
      <div className="row border rounded task" >
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" className="priorityCol"></th>
              <th scope="col" className="descriptionCol"></th>
              <th scope="col" className="addCol"></th>
              <th scope="col" className="deleteCol"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <button type="button" className="btn"><StarButtonOutline onClick={this.starTaskClick} /></button>
              </th>
              <td className="taskDescription">{description}</td>

              <td> {!this.props.item.completed && (              //if the task is not completed + the done button is clicked, remove the done button
                <button type="button"
                  className="btn">
                  <CompleteButton onClick={this.doneClicked} />
                </button>
              )}</td>

              <td>
                <button
                  type="button"
                  className="btn">
                  <DeleteButton onClick={this.deleteClicked} />
                </button></td>
            </tr>
          </tbody>
        </table>
      </div>

    );
  }
}

export default Task;
