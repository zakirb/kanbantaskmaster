import React, { Component } from 'react';
import '../css/App.css';
import Signup from './Signup';
import Login from './Login';
import { UserProfile } from './UserProfile';
import axios from 'axios';
import { connect } from 'react-redux';
import { liftTokenToState, logout } from '../actions/index'
import {GridTile} from 'material-ui/GridList';
import { Row, Col } from 'react-flexbox-grid';

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 700,
    height: 400,
    display: 'inline',
  },
  layout: {
    zDepth: 15,
    margin: 50
  }
}

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

class ConnectedUserAccess extends Component {
  constructor(props) {
    super()
  }


  componentDidMount() {
    var token = localStorage.getItem('mernToken')
    if (token === 'undefined' || token === null || token === '' || token === undefined) {
      console.log("Token was undefined in localStorage")
      this.props.logout()
    } else {
      console.log("Token was FOUND!")
      axios.post('/auth/me/from/token', {
        token
      }).then( result => {
        console.log("This is the result of /auth/me/from/token:")
        console.log(result)
        localStorage.setItem('mernToken', result.data.token)
        console.log(localStorage.mernToken)

        this.props.liftTokenToState({
          token: result.data.token,
          user: result.data.user
        })
      }).catch( err => console.log(err) )
    }
  }

  render() {
    let theUser = this.props.user
    if (typeof theUser === 'object' && Object.keys(theUser).length > 0) {
      return (
        <Row center="xs">
          <Col>
        <div className="login" style={style.layout}>
          <div className='row'>
            <div className="col s6 m6 l6">
              <UserProfile user={theUser} logout={this.props.logout} />
            </div>
          </div>
        </div>
        </Col>
        </Row>
      )
    } else {
      return (
        <Row center="xs">
          <Col>
        <div className="login" style={style.layout}>
          <GridTile>
              <Signup />
          </GridTile>

          <GridTile>
              <Login />
          </GridTile>
        </div>
        </Col>
        </Row>
      )
    }
  }

}
const UserAccess = connect(mapStateToProps, mapDispatchToProps)(ConnectedUserAccess)
export default UserAccess;
