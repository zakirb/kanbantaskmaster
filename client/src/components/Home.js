import React, { Component } from 'react';
// import UserAccess from './UserAccess';
import Paper from 'material-ui/Paper'
const style = {
  zDepth: 15,
  margin: 20,
}

class Home extends Component {

  render(){
    return(
      <div className='row'>
        <Paper style={style}>
          <div className='col s6 m6 l6 z-depth-3'>
          <h2>Hello </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
        </div>
        </Paper>
      </div>
    )
  }
}

export default Home;
