import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Carousel } from 'react-responsive-carousel';
const style = {
  zDepth: 15,
  margin: 20,
}

class Home extends Component {
  render(){
    return(
      <div className='row'>

        <Paper style={style}>

          <div className='col s12 z-depth-3'>
          <h1 className="home">Task Master</h1>
          <h2 className="home">Welcome to Task Master! Our site was developed to help organize projects more efficiently
          based on Scrum principles. Whether you’re in a business setting or a working parent, our site helps you monitor
          the progress of each project. Simply sign up and you can begin creating projects and assigning tasks. </h2>
          <Carousel />
        </div>
      </Paper>
    </div>



    )
  }
}

export default Home;
