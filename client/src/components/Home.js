import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Row, Col } from 'react-flexbox-grid';
import ImageCarousel from './Carousel.js';

const style = {
card_style: {
  width: 1250,
  height: 300,
  margin: 5,
  textAlign: 'center'
}
}
class Home extends Component {
  render(){
    return(
      <div>
      <Row center="xs">
        <Col>
      <div className='row'>

        <Card  className="home" style={style.card_style}  zDepth={5}>
          <div className='col s12 z-depth-3'>
          <h1 className="home">Task Master</h1>
          <h2 className="home">Welcome to Task Master! Our site was developed to help organize projects more efficiently
          based on Scrum principles. Whether you’re in a business setting or a working parent, our site helps you monitor
          the progress of each project. Simply sign up and you can begin creating projects and assigning tasks. </h2>
        </div>
        </Card>

      </div>
      </Col>
      </Row>
      <ImageCarousel />
      </div>


    )
  }
}

export default Home;
