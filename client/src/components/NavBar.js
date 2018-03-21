import React, {Component}  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import ViewTasks from './ViewTasks';
import ViewProject from './ViewProject';
import UserAccess from './UserAccess';
// import Signup from './Signup';
import { UserProfile } from './UserProfile';
import Projects from './Projects';
import ProjectItem from './ProjectItem';
import { connect } from 'react-redux';
import CreateProjectForm from './CreateProjectForm';
import CreateTasks from './CreateTasks';
import EditTasks from './EditTasks';
import EditProjects from './EditProjects';



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
    const projectTestData = [
      {title: "Workflow Project Organizer", team: ["Zakir B", "Dan V", "Tim H"], tasks: ["Build Models", "Implement Redux", "Implement Material UI"]},
      {title: "Party Bus", team: ["Zakir B", "Dan V"], tasks: ["Buy Beer", "Seek Contacts"]},
      {title: "Project 3", team: ["Zakir B", "Dan V", "Tim H"], tasks: ["Have Fun", "Get to know each other", "Try to understand this shit"]}
    ]
    let theUser = this.props.user
    console.log(this.props.user)
    let navigation
    if (typeof theUser === 'object' && Object.keys(theUser).length > 0){
      console.log("user is real")
      navigation = (
        <nav>
          <div className='nav-wrapper teal darken-3'>
            {/* <a href='/' className='brand-logo'>Workflow Project App</a> */}
              <Link to='/'>Workflow Project App</Link>{' '}
              <Link to='/'>Home</Link>{' '}
              <Link to='/Projects'>Projects</Link>{' '}
              <Link to='/ProjectItem'>Project Item</Link>{' '}
              <Link to='/UserAccess'>User Profile</Link>{' '}
              <Link to='/ViewTasks'> Tasks (tmp)</Link>{' '}
              <Link to='/ViewProject'>View Project (tmp)</Link>
            {/* <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Projects'>Projects</Link></li>
              <li><Link to='/ProjectItem'>Project Item</Link></li>
              <li><Link to='/UserAccess'>User Profile</Link></li>
              <li><Link to='/ViewTasks'>View Project Tasks (temp)</Link></li>
            </ul> */}
          </div>
        </nav>
      )
    } else {
      navigation = (
        <nav>
          <div className='nav-wrapper teal darken-3'>
            <Link to='/'>Workflow Project App</Link>{' '}
            <Link to='/'>Home</Link>{' '}
            <Link to='/UserAccess'>User Access</Link>

            {/* <a href='/' className='brand-logo'>Workflow Project App</a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li><Link to='/'>Home</Link></li>{' '}
              <li><Link to='/UserAccess'>User Access</Link></li>
            </ul> */}
          </div>
        </nav>
      )
    }
    return (
      <Router>
        <div>
          {navigation}
          <br />
          <CreateProjectForm />
          <CreateTasks />
          <EditTasks />
          <EditProjects />
          <Route exact path='/' render={() => <Home />} />
          <Route path='/Projects' render={() => <Projects projects={projectTestData}/>} />
          <Route path='/ProjectItem' render={() => <ProjectItem />} />
          <Route path='/ViewProject' render={() => <ViewProject />} />
          {/* <Route path='/CreateProjectForm' render={() => <CreateProjectForm />} /> */}
          {/* <Route path='/EditProjectForm' render={() => <CreateProjectForm />} /> */}
          <Route path='/ViewTasks' render={() => <ViewTasks />} />
          {/* <Route path='/EditTasks' render={() => <EditTasks />} /> */}
          <Route path='/UserAccess' render={() => <UserAccess  />} />
          <Route path='/UserProfile' render={() => <UserProfile user={theUser} logout={this.logout} />} />

        </div>
      </Router>
    )
  }
}

const NavBar = connect(mapStateToProps, null)(ConnectedNavBar)
export default NavBar;
