import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import one from './images/one.jpeg';
import two from './images/two.jpg';
import three from './images/three.jpeg';
import github from './images/GitHub.png';
import linkedin from './images/linkedin.png';
import daniel from './images/Daniel.jpg';
import tim from './images/Tim_Hass.jpg';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <Row around="xs" middle="xs">

          <Col xs={4}>
            <Row>
              <Col xs={12}>
                <img src={one} />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h3>Zakir Butte</h3>
                <p>Lorem  asdfmsodfosdkfsog sgm oskgo ksgo msogksvomos mo kgsomsgd omgso kgsgo m</p>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <img src={github} />
              </Col>
              <Col xs={6}>
                <img className='linkedin' src={linkedin} />
              </Col>
            </Row>
          </Col>


          <Col xs={4}>
            <Row>
              <Col xs={12}>
                <img src={daniel} />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h3>Daniel Vancura</h3>
                <p>Lorem  asdfmsodfosdkfsog sgm oskgo ksgo msogksvomos mo kgsomsgd omgso kgsgo m</p>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <img src= {github}/>
              </Col>
              <Col xs={6}>
                <img className='linkedin' src= {linkedin}  />
              </Col>
            </Row>
          </Col>


          <Col xs={4}>
            <Row>
              <Col xs={12}>
                <img src={tim} />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h3>Tim Hass</h3>
                <p>Lorem  asdfmsodfosdkfsog sgm oskgo ksgo msogksvomos mo kgsomsgd omgso kgsgo m</p>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <img src= {github}/>
              </Col>
              <Col xs={6}>
                <img className='linkedin' src= {linkedin} />
              </Col>
            </Row>
          </Col>



        </Row>
      </div>
        );
    }
}

export default Footer;
