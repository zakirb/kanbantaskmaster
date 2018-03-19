import React, { Component } from 'react';
import axios from 'axios';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const style = {
  height: 300,
  width: 300,
  margin: 10,
  padding: 15,
  textAlign: 'center',
  display: 'inline-block',
};

class Signup extends Component {
  constructor(props) {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
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
    const { name, email, password } = this.state
    return (
      name.length > 0 &&
      email.length > 4 &&
      password.length > 7
    );
  }


  handleSubmit(e) {
    if (!this.canBeSubmitted()){
      e.preventDefault()
      return;
    }
    e.preventDefault()
    axios.post('/auth/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }).then( result => {
      console.log(result.data)
      localStorage.setItem('mernToken', result.data.token)
      this.props.liftToken(result.data)
    })
  }


  render() {
    const isEnabled = this.canBeSubmitted();

    return (
      <Paper style={style} zDepth={4}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            hintText="Enter your name"
            errorText="This field is required"
            value={this.state.name}
            name='name'
            type='text'
            onChange={this.handleNameChange}
          />
          {/* Name: <input type='text' value={this.state.name} name='name' onChange={this.handleNameChange} /> */}
          <br/>
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
            hintText="Create a password"
            errorText="This field is required"
            value={this.state.password}
            name='password'
            type='password'
            onChange={this.handlePasswordChange}
          />
          {/* Password: <input type='password' value={this.state.password} name='password' onChange={this.handlePasswordChange} /> */}
          <br/>
          <FlatButton
            label="Sign Up"
            type='submit'
            disabled={!isEnabled}
          />
          {/* <input type='submit' value='Sign Up' /> */}
        </form>
      </Paper>
    )
  }
}

export default Signup;
