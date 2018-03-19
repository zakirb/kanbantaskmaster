import React, {Component}  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import UserAccess from './UserAccess'
import Signup from './Signup'
import UserProfile from './UserProfile'

class NavBar extends Component {
  render(){
    return (
      <Router>
        <div>
          <nav>
            <div className='nav-wrapper teal darken-3'>
              {/* <a href='/' className='brand-logo'>Dino Diggz</a> */}
              <ul id='nav-mobile' className='right hide-on-med-and-down'>
                <li><Link to='/'>Home</Link></li>
                {/* <li><Link to='/Signup'>Sign Up</Link></li> */}
                <li><Link to='/UserAccess'>Access Account</Link></li>
                <li><Link to='/UserProfile'>User Profile</Link></li>
                {/* <li><Link to='/Search'>Search</Link></li> */}
                {/* <li>{loggin}</li> */}
              </ul>
            </div>
          </nav>
          <br />

          <Route exact path='/' render={() => <Home />} />
          {/* <Route path='/Search' render={() => <Search />} /> */}
          {/* <Route path='/Login' render={() => <Login changeName={this.handleNameChange} changeEmail={this.handleEmailChange} changePassword={this.handlePasswordChange} toggle={this.toggleLogin}/>} /> */}
          {/* <Route path='/Login' render={() => <Login />} /> */}
          {/* <Route path='/Signup' render={() => <Signup />} /> */}
          <Route path='/UserAccess' render={() => <UserAccess  />} />
          {/* <Route path='/UserProfile' render={() => <UserProfile  />} /> */}
          {/* <Route path='/Profile' render={() => <UserProfile real={this.state.realName} name={this.state.name} email={this.state.email} />} /> */}
        </div>
      </Router>
    )
  }
}
export default NavBar;
