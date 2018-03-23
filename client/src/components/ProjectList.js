// import React, { Component } from 'react';
import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
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

// handleDelete = (projectID) => {
//   axios.delete('/destroy/project', {
//     id:projectID
//   }).then( result => {
//     console.log(result)
//   })
// }
// onClick={ () => this.handleDelete(project._id)}


const ProjectList = (props) => {

  if (props) {
    if (props.projects) {
      var projectCard = (
        props.projects.map((project, index) => (
          <Card
            style={style.card_style}
            key={index}
            >

            <CardHeader
              title={<Link style={{textDecoration: 'none', color: 'black'}}to='/ViewProject'>{project.title}</Link>}
              subtitle={project.description}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardActions>
              <Link to='/Projects/edit'><FlatButton label="Edit" /></Link>
              <Link to='/Projects'><FlatButton label="Delete" /></Link>
            </CardActions>
            <CardText>{project.description}</CardText>
            <CardText expandable={true}>
              <h3>Tasks</h3>
              <ul>
                {project.tasks.map((task, index) => (
                  <li key={index}>{task.description}</li>
                ))}
              </ul>
            </CardText>
          </Card>
        )
      )
    )



    }
  }


    return (
      <div className="row">
        {projectCard}
      </div>
    )



    };

export default ProjectList;
