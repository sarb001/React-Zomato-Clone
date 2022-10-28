import React from 'react'
import './Carousel.css';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import Slider from 'react-slick';

const  settings = {

    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow : <NextArrow />,
    nextArrow : <PrevArrow />,
  };


 function Carousel({list}) {
  return (
    <div className = 'collection-wrapper'> 
         <div className = "max-width">
             <div className = "collection-subtitle-text">
                  <span> Inspiration for your first order </span>
             </div>
         </div>

         <Slider {...settings} >
                {list.map((item) =>
                (
                    <div>
                         <div className = "collection-cover">
                             <img src = {item.image}  alt = "carosuel-image"  className='collection-image' />
                             <span id = "title">   {item.title} </span>
                         </div>
                    </div>
                ))}
        </Slider > 
    </div>
  )
}
export default Carousel