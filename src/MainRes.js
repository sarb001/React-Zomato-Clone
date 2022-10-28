import React from 'react';
import Card from './Card';
import Explorecard from './Explorecard';
import {RestaurantCollection } from './RestaurantCollection';

const res = RestaurantCollection;

 function MainRes() 
 {
  return (
    <div >
        <Explorecard  listcards = {res} />
    </div>
  )
}
export default MainRes