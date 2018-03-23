import React, { Component } from 'react';
import axios from 'axios';
// import CreateProjectForm from './CreateProjectForm';
// import ProjectItem from './ProjectItem';
import ProjectList from './ProjectList';
import ProjectSearch from './ProjectSearch';
// import { LIFT_PROJECT_TO_STATE } from '../actions/index'
import { connect } from 'react-redux';
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

const mapStateToProps = state => {
  return {
    user: state.user,
    token: state.token,
    rerender: state.rerender
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     liftProjectToState: project => dispatch(liftProjectToState(project))
//   }
// }

class ConnectedProjects extends Component {
  constructor(props){
    super(props)
    // let projectList = props.projects
    this.state = {
      filterValue: '',
      projectsToDisplay: null,
      projectsFromDB: null
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  getProjects = () => {
    axios.post('/view/projects', {
      userId:this.props.user._id
    }).then( result => {
      console.log(this.props);
      console.log('did mount', result)
      this.setState({
        projectsFromDB:result.data,
        projectsToDisplay:result.data
      })
    })
  }

  componentDidMount() {
    if (this.props.user._id) {
      console.log(this.props.user._id)
      this.getProjects()
    } else {
      this.setState({
        reload: true
      })
    }
  }




  componentDidUpdate() {
    console.log('PROJECTS UPDATED')
    if (!this.state.projectsFromDB) {
      this.getProjects()
    }
  }
  // past this down to the kids...
  handleFilterChange(event){
    event.preventDefault()
    // console.log(event.target.value)
    // console.log(this.props)

    const filterValue = event.target.value
    // not using prevState, but necessary to use
    // second param is props, only two params
    this.setState( (prevState, props) => {
      // remove items that don't contain the filter filterValue
      const filteredProjectList = this.state.projectsFromDB.filter( project =>
        // project.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
        project.title.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
      // return tnew state with the filtered fruit list and the now value of the filter
      return {
        projectsToDisplay: filteredProjectList,
        filterValue
      }
    }) // end setState
  } // end handle filter change

  render() {
    // const projectTestData = [
    //   {title: "Workflow Project Organizer", team: ["Zakir B", "Dan V", "Tim H"], tasks: ["Build Models", "Implement Redux", "Implement Material UI"]},
    //   {title: "Party Bus", team: ["Zakir B", "Dan V"], tasks: ["Buy Beer", "Seek Contacts"]},
    //   {title: "Project 3", team: ["Zakir B", "Dan V", "Tim H"], tasks: ["Have Fun", "Get to know each other", "Try to understand this shit"]}
    // ]
    return (
      <div className='row'>
        <Paper style={style}>
          <div className='col '>
            <h1>Projects</h1>
            <ProjectSearch value={this.state.filterValue} onChange={this.handleFilterChange}/>
            <ProjectList projects={this.state.projectsToDisplay}/>
          </div>
        </Paper>
      </div>
    );
  }
}
const Projects = connect(mapStateToProps, null)(ConnectedProjects);
export default Projects;
