import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { liftAllProjectsToState } from "../actions/index"
// import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';

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

const mapStateToProps = state => {
  return {
    allProjects: state.allProjects
  }
}

const mapDispatchToProps = dispatch => {
  return {
    liftAllProjectsToState: (projects) => dispatch(liftAllProjectsToState(projects))
  }
}




class ConnectedProjectList extends Component {
  constructor(props) {
    super()
  }

  componentDidUpdate() {
    console.log('PROJECTLIST UPDATED')
  }

  handleDelete = (projectId) => {
    console.log(projectId)
    console.log('HANDLING DELETE FUNCTION');
    axios.delete('/destroy/project', {params:
      {projectId}
    }).then( result => {
      console.log(result.data)

    var newProjects =  this.props.allProjects.filter( (project) => {
      if (project._id !== result.data._id) {
        return project
      }
    })
    this.props.liftAllProjectsToState(newProjects)


    })
  }



  render() {
    if (this.props) {
      if (this.props.projects) {
        var projectCard = (
          this.props.projects.map((project, index) => (
            <Card
              style={style.card_style}
              key={index}>
              <CardHeader
                title={<Link style={{textDecoration: 'none', color: 'black'}}to='/ViewProject'>{project.title}</Link>}
                subtitle={project.description}
                actAsExpander={true}
                showExpandableButton={true}/>
              <CardActions>
                <Link to='/Projects/edit'><FlatButton label="Edit" /></Link>
                <Link to='/Projects'><FlatButton label="Delete" onClick={ () => this.handleDelete(project._id)} /></Link>
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
          ))
        )
      }
    }
    return (
      <div className="row">
        {projectCard}
      </div>
    )

  }

}

const ProjectList = connect(mapStateToProps, mapDispatchToProps)(ConnectedProjectList)

export default ProjectList;
