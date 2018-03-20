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
  render(){
    return (
      <Router>
        <div>
          <nav>
            <div className='nav-wrapper teal darken-3'>
              <a href='/' className='brand-logo'>Workflow Project App</a>
              <ul id='nav-mobile' className='right hide-on-med-and-down'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Projects'>Projects</Link></li>
                <li><Link to='/ProjectItem'>Project Item</Link></li>
                <li><Link to='/UserAccess'>Access Account</Link></li>
                {/* <li><Link to='/UserProfile'>User Profile</Link></li> */}
                {/* <li><Link to='/Login'>Login</Link></li> */}
                {/* <li><Link to='/Signup'>Sign Up</Link></li> */}
              </ul>
            </div>
          </nav>
          <br />

          <Route exact path='/' render={() => <Home />} />
          <Route path='/Projects' render={() => <Projects />} />
          <Route path='/ProjectItem' render={() => <ProjectItem />} />
          {/* <Route path='/Login' render={() => <Login liftToken={this.liftTokenToState} />} /> */}
          {/* <Route path='/Signup' render={() => <Signup liftToken={this.liftTokenToState} />} /> */}
          <Route path='/UserAccess' render={() => <UserAccess  />} />
          {/* <Route path='/UserProfile' render={() => <UserProfile user={user} logout={this.logout} />} /> */}
          {/* <Route path='/Profile' render={() => <UserProfile name={this.state.name} email={this.state.email} />} /> */}
        </div>
      </Router>
    )
  }
}
export default NavBar;
