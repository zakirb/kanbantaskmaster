import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

class Carousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="../client/public/images/1.jpeg" />
                    <p className="legend">Sample Projects</p>
                </div>
                <div>
                    <img src="../client/public/images/2.jpg" />
                    <p className="legend">Sample Tasks</p>
                </div>
                <div>
                    <img src="../client/public/images/3.jpeg" />
                    <p className="legend">Sample</p>
                </div>
            </Carousel>
        );
    }
});

ReactDOM.render(<Carousel />, document.querySelector('.carousel')

export default Carousel;
