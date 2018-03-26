import React, { Component } from 'react';
// import Paper from 'material-ui/Paper';
import {Card} from 'material-ui/Card';
import { Row, Col } from 'react-flexbox-grid';
import ImageCarousel from './Carousel.js';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import Footer from './Footer.js';
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
      <Row  center="xs">
        <Col  xs={12}>
          <Row around="xs">
            <Col  xs={10}>
              <Card className="home"   zDepth={5}>
                <div className='col s12 z-depth-3'>
                  <h1 className="home">Task Master</h1>
                  <h2 className="home" style={{margin:10, padding:10}}>Welcome to Task Master! Our site was developed to help organize projects more efficiently
                  based on Scrum principles. Whether you’re in a business setting or a working parent, our site helps you monitor
                  the progress of each project. Simply sign up and you can begin creating projects and assigning tasks.</h2>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ImageCarousel />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Footer />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default Home;
