import React from 'react'
import Card from './Card'
import './Explorecard.css';

 function Explorecard({listcards}) 
 {
  return (
    <div className = 'wrapper-width'> 
     <div className="wrapper-text">
          <span style = {{fontSize:'29px',fontWeight:'500'}}> Delivery Restaurants  </span>
     </div>
        <div className = "explore-grid">
             {
                listcards.map((item) =>{return <Card  itemain = {item} />})
             }
        </div>
             
    </div>
  )
}
export default Explorecard
