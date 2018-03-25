import React from 'react';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
// import ReactDOM from 'react-dom';
// import { Carousel } from 'react-responsive-carousel';
import one from './images/one.jpeg';
import two from './images/two.jpg';
import three from './images/three.jpeg';


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
                <div style={{height:450}}>
                  <img
                    style={{width:"100%",height:"100%"}}
                    src= {one}
                  />
                  <div className="carousel-caption">

                  </div>
                </div>

                <div style={{height:450}}>
                  <img
                    style={{width:"100%",height:"100%"}}
                    src= {two}
                  />
                  <div className="carousel-caption">

                  </div>
                </div>

                <div style={{height:450}}>
                  <img
                    style={{width:"100%",height:"100%"}}
                    src= {three}
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


// const ImageCarousel = props => {
//     return (
//         <div className="container carousel">
//             <div id="myCarousel" className="carousel slide" data-ride="carousel">
//                 <ol className="carousel-indicators">
//                     <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
//                     <li data-target="#myCarousel" data-slide-to="1"></li>
//                     <li data-target="#myCarousel" data-slide-to="2"></li>
//                 </ol>
//                 <div className="carousel-inner">
//                     <div className="items active">
//                         <img className="image" src= {three} alt= "one" />
//                     </div>
//
//                     <div className="items">
//                         <img className="image" src= {two} alt= "two" />
//                     </div>
//
//                     <div className="items">
//                         <img className="image" src= {three} alt= "three" />
//                     </div>
//                 </div>
//                 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
//                     <span className="glyphicon glyphicon-chevron-left"></span>
//                     <span className="sr-only">Previous</span>
//                 </a>
//                 <a className="right carousel-control" href="#myCarousel" data-slide="next">
//                     <span className="glyphicon glyphicon-chevron-right"></span>
//                     <span className="sr-only">Next</span>
//
//                 </a>
//           </div>
//         </div>
//     )
// }

export default ImageCarousel;
