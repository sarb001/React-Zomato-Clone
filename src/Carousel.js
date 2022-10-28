import React from 'react'
import './Carousel.css';

import Slider from 'react-slick';

var settings = {

    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


 function Carousel() {
  return (
    <div> 
       <Slider {...settings} >
            
        <Slider />
    </div>
  )
}
export default Carousel