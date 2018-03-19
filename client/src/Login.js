import React, { Component } from 'react';
import axios from 'axios';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const style = {
  height: 200,
  width: 300,
  margin: 10,
  padding: 15,
  textAlign: 'center',
  display: 'inline-block',
};

class Login extends Component {
  constructor(props) {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  // prevents the submit button from firing
  // if the criteria are not meet
  canBeSubmitted(){
    const { email, password } = this.state
    return (
      email.length > 4 &&
      password.length > 7
    );
  }

  handleSubmit(e) {
    if(!this.canBeSubmitted()){
      e.preventDefault()
      return;
    }
    e.preventDefault()
    axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then( result => {
      console.log(result.data)
      localStorage.setItem('mernToken', result.data.token)
      this.props.liftToken(result.data)
    }).catch( err => console.log(err))
  }


  render() {
    const isEnabled = this.canBeSubmitted();

    return (
      <Paper style={style} zDepth={4}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            hintText="Enter your email address"
            errorText="This field is required"
            value={this.state.email}
            name='email'
            type='email'
            onChange={this.handleEmailChange}
          />
          {/* Email: <input type='text' value={this.state.email} name='email' onChange={this.handleEmailChange} /> */}
          <br/>
          <TextField
            hintText="Enter you password"
            errorText="This field is required"
            value={this.state.password}
            name='password'
            type='password'
            onChange={this.handlePasswordChange}
          />
          {/* Password: <input type='password' value={this.state.password} name='password' onChange={this.handlePasswordChange} /> */}
          <br/>
          <FlatButton
            label="Log In"
            type='submit'
            disabled={!isEnabled}
          />
          {/* <input type='submit' value='Log In' /> */}
        </form>
      </Paper>
    )


  }
}

export default Login;
