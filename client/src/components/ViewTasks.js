import React, { Component } from 'react';
// import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card_style: {
    width: 400,
    height: 300,
    margin: 5
  }
}

class ViewTasks extends Component {
  render() {
    return (
      <div>
        <h1>Edit Tasks</h1>
        <Card style={style.card_style}>
          <CardHeader
            title="Workflow Project Title"
            subtitle="Zakir, Dan, Tim"
          />
          <CardActions>
            <FlatButton label="Edit Task" />
            <FlatButton label="Add Step" />
            <FlatButton label="Delete" />
          </CardActions>
          <CardText>
            <ul>
              <li>Task: Build App</li>
              <li>Assigned To:</li>
              <li>Steps:</li>
              <ol>
                <li>Create React App</li>
                <li>NPM install dependencies</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.</li>
                <li>Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.</li>
                <li>Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</li>
                <li>Create React App</li>
              </ol>
            </ul>
          </CardText>
        </Card>
      </div>
    );
  }
}





export default ViewTasks;
