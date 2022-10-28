import React from 'react';
import Carousel from './Carousel';

const collectioncarousel = [
    {
        id : 1,
        image : '/paratha -1 .png',
        title : 'Paratha',
    },
    {
        id : 2,
        image : '/pasta.-2 .png',
        title : 'Pasta',
    },
    {
        id : 3,
        image : '/rolls 3.png',
        title : 'Rolls',
    },
    {
        id : 4,
        image : '/Sandiwch 4 .png',
        title : 'Sandwich',
    },
    {
        id : 5,
        image : '/Chicken - Copy- 5 .png',
        title : 'Chicken',
    },
    {
        id : 6,
        image : '/Noodles-6.png',
        title : 'Noodles',
    },
    {
        id : 7,
        image : '/Burger-7.png',
        title : 'Burger',
    },
    {
        id : 8,
        image : '/Dal-8.png',
        title : 'Dal',
    },
    {
        id : 9,
        image : '/Fries-9.png',
        title : 'Fries',
    },
    {
        id : 10,
        image : '/Manchurian-10.png',
        title : 'Manchurian',
    },
]

 function CarouselCollection() {
  return (
    <div>
         <Carousel  list = {collectioncarousel}  />
    </div>
  )
}
export default CarouselCollection