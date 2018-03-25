import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { liftAllProjectsToState, editProject } from "../actions/index"
// import { liftAllProjectsToState } from "../actions/index"
// import TextField from 'material-ui/TextField';
import { liftProjectToState } from '../actions/index'
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
    margin: 5
  }
}

const mapStateToProps = state => {
  return {
    allProjects: state.allProjects
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     liftAllProjectsToState: (projects) => dispatch(liftAllProjectsToState(projects)),
//     liftProjectToState: project => dispatch(liftProjectToState(project))
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    liftAllProjectsToState: (projects) => dispatch(liftAllProjectsToState(projects)),
    liftProjectToState: project => dispatch(liftProjectToState(project)),
    editProject: project => dispatch(editProject(project))
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

  handleEdit = (projectId) => {
    console.log(projectId)
    console.log('HANDLING EDIT FUNCTION');
    axios.get('/view/findOne/project', {
      params: {projectId}
    }).then( result => {
      console.log(result.data)
      this.props.liftProjectToState(result.data)
    }).catch( err => console.log(err))
  }

  handleSelectProject = projectId => {
    console.log('Project ID being raised to state by select: ' + projectId)
    axios.get('/view/findOne/project', {
      params: {projectId}
    }).then( result => {
      console.log(result.data)
      this.props.liftProjectToState(result.data)
    }).catch( err => console.log(err))
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
                // subtitle={project.description}
                actAsExpander={true}
                showExpandableButton={true}/>
              <CardActions>
                <Link to='/Projects/edit'><FlatButton label="Edit" onClick={ () => this.handleEdit(project._id)} /></Link>
                <Link to='/Projects'><FlatButton label="Delete" onClick={ () => this.handleDelete(project._id)} /></Link>
              </CardActions>
              <CardText>{project.description}</CardText>
              <CardText expandable={true}>
                <h3>Tasks</h3>
                <ul>
                  {project.tasks.map((task, index) => (
                    <li key={index}>Task: {task.description} Status: {task.task_status ? task.task_status : "not set"} </li>
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
