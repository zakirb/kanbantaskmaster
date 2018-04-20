import React from 'react';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import kanban from './images/kanban.png';
import projects from './images/projects.png';
import combine from './images/combine.jpg';
import combine2 from './images/projectcreate.png';


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
              <React_Bootstrap_Carousel
                animation={true}
                slideshowSpeed={7000}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                onSelect={this.onSelect}
                ref={r=>this.slider=r}
                className="carousel-fade" >

                <div className='carousel-image-container kanbanImage'>
                  <img className="carousel-image kanban-image" src= {kanban}/>
                </div>

                <div className='carousel-image-container'>
                  <img className="carousel-image" src= {projects}/>
                </div>

                  <div className='carousel-image-container'>
                    <img className= "carousel-image" src={combine2}/>
                </div>
              </React_Bootstrap_Carousel>
      );
    }
};


export default ImageCarousel;
