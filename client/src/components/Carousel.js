import React from 'react';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import kanban from './images/kanban.png';
import projects from './images/projects.png';
import combine from './images/combine.jpg';


class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    onSelect= (active,direction)=>{
        console.log(`active=${active} && direction=${direction}`);
    }
    slideNext=()=>{
      this.slider.slideNext();
    }
    slidePrev=()=>{
      this.slider.slidePrev();
    }
    goToSlide=()=>{
      this.slider.goToSlide(4);
    }
    _changeIcon=()=>{
      let {leftIcon,rightIcon}=this.state;
      if(leftIcon && rightIcon){
        this.setState({
          leftIcon:undefined,
          rightIcon:undefined
        });
      }
      else{
        this.setState({
          leftIcon:<span className="glyphicon glyphicon-glass"></span>,
          rightIcon:<span className="glyphicon glyphicon-music"></span>
        });
      }
    }
    render() {
      let {leftIcon,rightIcon}=this.state;
      return(
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">

            </div>
            <div className="col-md-12">
              <React_Bootstrap_Carousel
                animation={true}
                slideshowSpeed={7000}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                onSelect={this.onSelect}
                ref={r=>this.slider=r}
                className="carousel-fade"
              >
                <div style={{height:500}}>
                  <img className="carouselImage"
                    style={{width:"60%",height:"60%"}}
                    src= {kanban}
                  />
                  <div className="carousel-caption">

                  </div>
                </div>

                <div style={{height:500}}>
                  <img className="carouselImage"
                    style={{width:"60%",height:"60%"}}
                    src= {projects}
                  />
                  <div className="carousel-caption">

                  </div>
                </div>

                  <div style={{height:500}}>
                  <img className= "createTaskImage"
                    style={{width:"60%",height:"60%"}}
                    src= {combine}
                  />
                  <div className="carousel-caption">

                  </div>
                </div>


              </React_Bootstrap_Carousel>
            </div>
          </div>
        </div>
      );
    }
};


export default ImageCarousel;
