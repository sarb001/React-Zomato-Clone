import React from 'react'
import Card from './Card'
import './Explorecard.css';

 function Explorecard({listcards}) 
 {
  return (
    <div className = 'wrapper-width'> 
        <div className = "explore-grid">
             {
                listcards.map((item) =>{return <Card  itemain = {item}/>})
             }
        </div>
             
    </div>
  )
}
export default Explorecard
