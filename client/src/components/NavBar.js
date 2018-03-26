import React, {Component}  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import KanbanBoard from './Kanban';
import UserAccess from './UserAccess';
import { UserProfile } from './UserProfile';
import Projects from './Projects';
import { connect } from 'react-redux';
import CreateProjectForm from './CreateProjectForm';
import CreateTasksForm from './CreateTasksForm';
import EditProjects from './EditProjects';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';

const style = {
  height: 20,
  width: 20,
  margin: .5,
  padding: 5,
  textAlign: 'center',
  display: 'inline-block'
};

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
    let theUser = this.props.user
    console.log(this.props.user)
    let navigation
    if (typeof theUser === 'object' && Object.keys(theUser).length > 0){
      console.log("user is real")
      navigation = (
        <nav className="navboxx">
          {/* <h4>Workflow Project App</h4> */}

          {/* <Menu> */}
            <div className='navbox'>
              {/* <Link to='/'><MenuItem primaryText="Home" /></Link> */}
              {/* <Link to='/Projects'><MenuItem primaryText="Projects" /></Link> */}
              {/* <Link to='/Projects/create'><MenuItem primaryText="Create Project" /></Link> */}
              {/* <Link to='/Tasks/create'><MenuItem primaryText="Create Task" /></Link> */}
              {/* <Link to='/UserAccess'><MenuItem primaryText="User Profile" /></Link> */}


              <Link to='/'><FlatButton label='Home' /></Link>
              <Link to='/Projects'><FlatButton label='Projects' /></Link>
              <Link to='/Projects/create'><FlatButton label='Create Project' /></Link>
              <Link to='/UserAccess'><FlatButton label='User Profile' /></Link>
            </div>
          {/* </Menu> */}
        </nav>
      )
    } else {
      navigation = (
        <nav>

          <div className='nav-wrapper teal darken-3'>
            <Link to='/'><MenuItem primaryText="Home" /></Link>
            <Link to='/UserAccess'><MenuItem primaryText="User Access" /></Link>
          </div>
        </nav>
      )
    }
    return (
      <Router>
        <div>
          <h4 style={{float: 'right', paddingRight: 20}}>Workflow Project App</h4>

          {/* <DropDownMenu> */}
            {navigation}
          {/* </DropDownMenu> */}

          <br />
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/Projects' render={() => <Projects />} />
          <Route path='/ViewProject' render={() => <KanbanBoard />} />
          <Route path='/Projects/create' render={() => <CreateProjectForm />} />
          <Route path='/Projects/edit' render={() => <EditProjects />} />
          <Route path='/Tasks/create' render={() => <CreateTasksForm />} />
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
