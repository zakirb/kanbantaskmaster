import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/App.css';
import DropDownMenuTask from './DropDownMenu';
import {Link} from 'react-router-dom';



export default class TaskItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskStatus: null
    }
    this.handleStatusChange = this.handleStatusChange.bind(this)
    this.handleMoveTaskClick = this.handleMoveTaskClick.bind(this)
  }

  handleStatusChange(value) {
    let taskStatus
    switch (value) {
      case 1: taskStatus = "todo"
      break;
      case 2: taskStatus = "progress"
      break;
      case 3: taskStatus = "review"
      break;
      case 4: taskStatus = "completed";
      break;
    }
    this.setState({
      taskStatus
    })
  }

  handleMoveTaskClick () {
    this.props.moveTask(this.props.task, this.state.taskStatus)
  }




  render() {
    if (this.props.task) {
      let dropDownValue
      switch (this.props.task.task_status) {
        case ("todo"): dropDownValue = 1;
        break;
        case ("progress"): dropDownValue = 2;
        break;
        case ("review"): dropDownValue = 3;
        break;
        case ("completed"): dropDownValue = 4;
        break;
        default: dropDownValue = null
      }

      return (
        <Card style={this.props.style} zDepth={5}>
          <CardText>
            <h3 className="TaskText">{this.props.task.description}</h3>
            <p className="TaskText">Assigned to: {this.props.task.assigned_to} </p>
            <CardActions>
              {/* <Link to="/Tasks/edit"> */}
              <RaisedButton className="edit" label="Move Task" onClick={this.handleMoveTaskClick} />
            {/* </Link> */}
            </CardActions>
          </CardText>
          <DropDownMenuTask dropDownValue={dropDownValue} handleStatusChange={this.handleStatusChange}/>
        </Card>
      )
    } else {
      return (
        <Card style={this.props.style} zDepth={5}>
          <CardText>
            <h3 className="TaskText">No Tasks In this category</h3>
            <p className="TaskText"></p>
            <CardActions>
              {/* <Link to="/Tasks/edit"><RaisedButton className="edit" label="Edit Task" /></Link> */}
            </CardActions>
          </CardText>
          {/* <DropDownMenuTask /> */}
        </Card>
      )
    }
  }
}
