import React, {Component}  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
// import Login from './Login';
import UserAccess from './UserAccess';
// import Signup from './Signup';
import { UserProfile } from './UserProfile';
import Projects from './Projects';
import ProjectItem from './ProjectItem';

class NavBar extends Component {
  constructor(props){
    super()
    this.state = {
      token:'',
      user: {}
    }
  }
  render(){
    let theUser = this.props.user
    let navigation
    if (typeof theUser === 'object' && Object.keys(theUser).length > 0){
      navigation = (
        <nav>
          <div className='nav-wrapper teal darken-3'>
            <a href='/' className='brand-logo'>Workflow Project App</a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Projects'>Projects</Link></li>
              <li><Link to='/ProjectItem'>Project Item</Link></li>
              <li><Link to='/UserAccess'>User Profile</Link></li>
            </ul>
          </div>
        </nav>
      )
    } else {
      navigation = (
        <nav>
          <div className='nav-wrapper teal darken-3'>
            <a href='/' className='brand-logo'>Workflow Project App</a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/UserAccess'>User Access</Link></li>
            </ul>
          </div>
        </nav>
      )
    }
    return (
      <Router>
        <div>
          {navigation}
          <br />

          <Route exact path='/' render={() => <Home />} />
          <Route path='/Projects' render={() => <Projects />} />
          <Route path='/ProjectItem' render={() => <ProjectItem />} />
          {/* <Route path='/Login' render={() => <Login liftToken={this.liftTokenToState} />} /> */}
          {/* <Route path='/Signup' render={() => <Signup liftToken={this.liftTokenToState} />} /> */}
          <Route path='/UserAccess' render={() => <UserAccess  />} />
          <Route path='/UserProfile' render={() => <UserProfile user={theUser} logout={this.logout} />} />
          {/* <Route path='/UserProfile' render={() => <UserProfile user={theUser} logout={this.logout} />} /> */}
          {/* <Route path='/Profile' render={() => <UserProfile name={this.state.name} email={this.state.email} />} /> */}
        </div>
      </Router>
    )
  }
}
export default NavBar;
