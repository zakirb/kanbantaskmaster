import React, {Component}  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import ViewTasks from './ViewTasks';
import KanbanBoard from './Kanban';
import UserAccess from './UserAccess';
// import Signup from './Signup';
import { UserProfile } from './UserProfile';
import Projects from './Projects';
import ProjectItem from './ProjectItem';
import { connect } from 'react-redux';
import CreateProjectForm from './CreateProjectForm';
import CreateTasksForm from './CreateTasksForm';
import EditTasks from './EditTasks';
import EditProjects from './EditProjects';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


const mapStateToProps = state => {
  return {
    user: state.user,
    token: state.token
  }
}

class ConnectedNavBar extends Component {
  constructor(props){
    super()
  }
  render(){
    // const projectTestData = [
    //   {title: "Workflow Project Organizer", description: "Workflow Project Organizer Description", team: ["Zakir B", "Dan V", "Tim H"], tasks: ["Build Models", "Implement Redux", "Implement Material UI"]},
    //   {title: "Party Bus", description: "Party Bus Description", team: ["Zakir B", "Dan V"], tasks: ["Buy Beer", "Seek Contacts"]},
    //   {title: "Project 3", description: "Project 3 Description",team: ["Zakir B", "Dan V", "Tim H"], tasks: ["Have Fun", "Get to know each other", "Try to understand this shit"]}
    // ]
    let theUser = this.props.user
    console.log(this.props.user)
    let navigation
    if (typeof theUser === 'object' && Object.keys(theUser).length > 0){
      console.log("user is real")
      navigation = (
        <nav className="navboxx">
          <div className='nav-wrapper teal darken-3'>
            <h4>Workflow Project App</h4>
            <div className='navbox'>
              <Link to='/'><MenuItem primaryText="Home" /></Link>
              <Link to='/Projects'><MenuItem primaryText="Projects" /></Link>
              <Link to='/UserAccess'><MenuItem primaryText="User Profile" /></Link>
              <Link to='/ProjectItem'><MenuItem primaryText="Project Item(TEMP)" /></Link>
            </div>
            <div className='navbox'>
              <Link to='/ViewProject'><MenuItem primaryText="View Project(Temp)" /></Link>
              <Link to='/Projects/edit'><MenuItem primaryText="Edit Project(TEMP)" /></Link>
              <Link to='/Projects/create'><MenuItem primaryText="Create Project(TEMP)" /></Link>
            </div>
            <div className='navbox'>
              <Link to='/Tasks'><MenuItem primaryText="View Task(TEMP)" /></Link>
              <Link to='/Tasks/create'><MenuItem primaryText="Create Task(TEMP)" /></Link>
              <Link to='/Tasks/edit'><MenuItem primaryText="Edit Task(TEMP)" /></Link>
            </div>
          </div>
        </nav>
      )
    } else {
      navigation = (
        <nav>
          <div className='nav-wrapper teal darken-3'>
            <Link to='/'><MenuItem primaryText="Workflow Project App" /></Link>
            <Link to='/'><MenuItem primaryText="Home" /></Link>
            <Link to='/UserAccess'><MenuItem primaryText="User Access" /></Link>
          </div>
        </nav>
      )
    }
    return (
      <Router>
        <div>
          <Menu>
          {navigation}
          </Menu>
          <br />
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/Projects' render={() => <Projects />} />
          <Route path='/ProjectItem' render={() => <ProjectItem />} />
          <Route path='/ViewProject' render={() => <KanbanBoard />} />
          <Route path='/Projects/create' render={() => <CreateProjectForm />} />
          <Route path='/Projects/edit' render={() => <EditProjects />} />
          <Route exact path='/Tasks' render={() => <ViewTasks />} />
          <Route path='/Tasks/create' render={() => <CreateTasksForm />} />
          <Route path='/Tasks/edit' render={() => <EditTasks />} />
          <Route path='/UserAccess' render={() => <UserAccess  />} />
          <Route path='/UserProfile' render={() => <UserProfile user={theUser} logout={this.logout} />} />
          <Route path='/delete/project' render={() => <CreateProjectForm />} />

        </div>
      </Router>
    )
  }
}

const NavBar = connect(mapStateToProps, null)(ConnectedNavBar)
export default NavBar;
