import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/App.css';
import DropDownMenuTask from './DropDownMenu';
import {Link} from 'react-router-dom';



const TaskItem = props => {

  if (props.task) {
    let dropDownValue = 0
    switch (props.task.task_status) {
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
      <Card style={props.style} zDepth={5}>
        <CardText>
          <h3 className="TaskText">{props.task.description}</h3>
          <p className="TaskText">Assigned to: {props.task.assigned_to} </p>
          <CardActions>
            <Link to="/Tasks/edit"><RaisedButton className="edit" label="Edit Task" /></Link>
          </CardActions>
        </CardText>
        <DropDownMenuTask dropDownValue={dropDownValue} task={props.task} handleStatusChange={props.handleStatusChange}/>
      </Card>
    )
  } else {
    return (
      <Card style={props.style} zDepth={5}>
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





export default TaskItem;
