import React, { Component } from 'react';
import '../css/App.css';
import NavBar from './NavBar';
import { liftTokenToState, logout } from '../actions/index';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = state => {
  return {
    user: state.user,
    token: state.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    liftTokenToState: userToken => dispatch(liftTokenToState(userToken)),
    logout: emptyUserToken => dispatch(logout(emptyUserToken))
  }
}

/////// CONNECTED APP ///////
class ConnectedApp extends Component {
  constructor(props) {
    super()

  }

  componentDidMount() {
    var token = localStorage.getItem('mernToken')
    if (token === 'undefined' || token === null || token === '' || token === undefined) {
      console.log("Token was undefined in localStorage")
      localStorage.removeItem('mernToken')
      this.setState({
        token:'',
        user: {}
      })
    } else {
      console.log("Token was FOUND!")
      console.log(this.props.user)
      axios.post('/auth/me/from/token', {
        token
      }).then( result => {
        console.log("This is the result after /auth/me/from/token:")
        console.log(result)
        localStorage.setItem('mernToken', result.data.token)
        console.log(localStorage.mernToken)
        this.props.liftTokenToState(result.data)
      }).catch( err => console.log(err) )
    }
  }

  render() {
    let theUser = this.props.user
    if (typeof theUser === 'object' && Object.keys(theUser).length > 0) {
      return (
        <div>
          <NavBar state={this.props} user={theUser}/>
        </div>
      )
    } else {
      return (
        <div>
          <NavBar state={this.props}/>
        </div>
      )
    }
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp)
export default App;
