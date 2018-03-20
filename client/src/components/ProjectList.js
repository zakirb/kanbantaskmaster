// import React, { Component } from 'react';
import React from 'react';
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

const ProjectList = (props) => (
      <div className="row">
        <h1>Project List</h1>
        <p>A list of all projects. Sample data = props from Projects.js</p>
        {props.projects.map((project, index) =>
          <Card
            style={style.card_style}
            key={index}
            >
            <CardHeader
              title={project.title}
              subtitle={project.team}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardActions>
              <FlatButton label="Edit" />
              <FlatButton label="Delete" />
            </CardActions>
            <CardText expandable={true}>
              THIS EXAMPLE EXPANDS...


                Project Tasks (array)
                <ul>
                  {project.tasks.map((task, index) =>
                      <li key={index}>{task}</li>
                    )}
                </ul>


              NOTE: div =row ends after the next Card in ProjectList . js
            </CardText>
          </Card>
        )}

          {/* <Card style={style.card_style}>
            <CardHeader
              title="Party Project"
              subtitle="Zakir, Dan"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardActions>
              <FlatButton label="Edit" />
              <FlatButton label="Delete" />
            </CardActions>
            <CardText expandable={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card> */}
      </div>
    );

export default ProjectList;
