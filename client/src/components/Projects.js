import React, { Component } from 'react';
import axios from 'axios';
import ProjectList from './ProjectList';
import ProjectSearch from './ProjectSearch';
import { liftAllProjectsToState } from '../actions/index'
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { Row, Col } from 'react-flexbox-grid';

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
    allProjects:state.allProjects,
    currentProject: state.currentProject
  }
}

const mapDispatchToProps = dispatch => {
  return {
    liftAllProjectsToState: projects => dispatch(liftAllProjectsToState(projects))
  }
}

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
    axios.get('/view/projects', {
      params:{userId:this.props.user._id}
    }).then( result => {
      console.log(this.props);
      console.log('did mount', result)
      this.props.liftAllProjectsToState(result.data)
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
    if (!this.props.allProjects) {
      this.getProjects()
      console.log(this.props.allProjects);
    }
    // if (this.state.reload === true && this.state.projectsFromDB) {
    //   console.log('BEFORE THE RELOADDDDD')
    //   this.setState({
    //     reload: false
    //   })

  }
  // past this down to the kids...
  handleFilterChange(event){
    event.preventDefault()
    // console.log(event.target.value)
    // console.log(this.props)
    if (this.props.allProjects) {
      const filterValue = event.target.value
      // not using prevState, but necessary to use
      // second param is props, only two params
      this.setState( (prevState, props) => {
        // remove items that don't contain the filter filterValue
        const filteredProjectList = this.props.allProjects.filter( project =>
        project.title.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
        // return tnew state with the filtered list and the now value of the filter
        return {
          projectsToDisplay: filteredProjectList,
          filterValue
        }
      }) // end setState
    }
  } // end handle filter change

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <div className='row center-xs'>
              <Paper style={style}>
                <div className='col '>
                  <h1>Projects</h1>
                  <ProjectSearch value={this.state.filterValue} onChange={this.handleFilterChange}/>
                  <ProjectList projects={this.state.projectsToDisplay || this.props.allProjects}/>
                </div>
              </Paper>
            </div>
          </Row>
        </Col>
      </Row>
    );
  }
}
const Projects = connect(mapStateToProps, mapDispatchToProps)(ConnectedProjects);
export default Projects;
