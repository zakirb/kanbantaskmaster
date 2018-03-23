import React from 'react';
import ReactDOM from 'react-dom';
// import { Carousel } from 'react-responsive-carousel';
import one from './images/one.jpeg';
import two from './images/two.jpg';
import three from './images/three.jpeg';


// class ImageCarousel extends Component {
//     render() {
//         return (
//             <Carousel >
//                 <div>
//                     <img className="image" src={one} />
//                     <p className="legend">Sample Projects</p>
//                 </div>
//                 <div>
//                     <img className="image" src={two} />
//                     <p className="legend">Sample Tasks</p>
//                 </div>
//                 <div>
//                     <img className="image" src={three} />
//                     <p className="legend">Sample</p>
//                 </div>
//             </Carousel>
//         );
//     }
// };
//
//
// export default ImageCarousel;

const ImageCarousel = props => {
    return (
        <div className="container carousel">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="items active">
                        <img className="image" src={one} />
                    </div>

                    <div className="items">
                        <img className="image" src={two} />
                    </div>

                    <div className="items">
                        <img className="image" src={three} />
                    </div>
                </div>
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
          </div>
        </div>
    )
}

export default ImageCarousel;
