import React, { Component } from 'react';
// import CreateProjectForm from './CreateProjectForm';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';

const style = {
  margin: 10,
  padding: 15,
  textAlign: 'center',
  display: 'inline-block',
};

class Projects extends Component {
  render() {
    return (
      <div>
        <Paper style={style}>
          <h1>Projects</h1>
          {/* <form onSubmit={this.handleSubmit}> */}
            <form >
            <TextField
              hintText="Search for Project"
              // errorText="This field is required"
              name='name'
              type='text'
            />
          </form>
        </Paper>
        
          <Card>
            <CardHeader
              title="Project Title"
              subtitle="Team Name or members"
            />
            <CardActions>
              <FlatButton label="Edit" />
              <FlatButton label="Delete" />
            </CardActions>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
          {/* <Card>
            <CardHeader
              title="Without Avatar"
              subtitle="Subtitle"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
            <CardText expandable={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card> */}
        {/* </Paper> */}
      </div>
    );
  }
}





export default Projects;
