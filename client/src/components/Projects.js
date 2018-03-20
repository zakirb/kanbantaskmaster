import React, { Component } from 'react';
// import CreateProjectForm from './CreateProjectForm';
// import ProjectItem from './CreateProjectForm';
import ProjectList from './ProjectList';
import ProjectSearch from './ProjectSearch';

import Paper from 'material-ui/Paper';
// import TextField from 'material-ui/TextField';
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';



const style = {
  margin: 10,
  padding: 15,
  textAlign: 'center',
  display: 'inline-block',
};

class Projects extends Component {
  constructor(props){
    super(props)
    this.state = {
      projects: '',
    }
  }
  render() {
    const projectTestData = [
      {title: "Workflow Project Organizer", team: ["Zakir B", "Dan V", "Tim H"], tasks: ["Build Models", "Implement Redux", "Implement Material UI"]},
      {title: "Party Bus", team: ["Zakir B", "Dan V"], tasks: ["Buy Beer", "Seek Contacts"]},
      {title: "Project 3", team: ["Zakir B", "Dan V", "Tim H"], tasks: ["Have Fun", "Get to know each other", "Try to understand this shit"]}
    ]
    return (
      <div className='row'>
        <Paper style={style}>
          <div className='col '>
            <h1>Projects</h1>
            <ProjectSearch />
            <ProjectList projects={projectTestData}/>
          </div>
        </Paper>
        {/* <ProjectList project={projects}/> */}
      </div>
    );
  }
}

export default Projects;
