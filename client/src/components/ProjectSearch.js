import React, { Component } from 'react';
// import CreateProjectForm from './CreateProjectForm';
// import ProjectItem from './CreateProjectForm';
// import ProjectList from './ProjectList';

// import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

// import FlatButton from 'material-ui/FlatButton';

const style = {
  margin: 10,
  padding: 15,
  textAlign: 'center',
  display: 'inline-block',
};


class ProjectSearch extends Component {
  render() {
    return (
      <div>
        {/* <h2>Project Search</h2> */}
        <p>Search for a project title:</p>
        {/* <form onSubmit={this.handleSubmit}> */}
          <form style={style}>
          <TextField
            hintText='Search for Project'
            // errorText="This field is required"
            name='projectTitle'
            type='text'
          />
        </form>
      </div>
    );
  }
}

export default ProjectSearch;
