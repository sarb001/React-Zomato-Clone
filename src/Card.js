import React from 'react'
import './Cards.css';

 function Card({itemain}) 
 {
  return (
    <div className='container-wrapper'>
         <div className="image-container" style = {{padding:'2%'}}>  
          <img  className  = "image-id" src = {itemain?.info?.image?.url}  alt = "Chicken"   />
            <div className = "text-aboveimg" >
                    <div className = "pr-extra-off" style = {{fontWeight:'500',fontSize:'19px',color:'white'}}> 
                     { itemain?.bulkOffers[0].text }
                    </div>
            </div>
         </div>

        <div className = "card-text" style = {{paddingLeft:'5%',paddingRight:'5%',borderBottom:'3px solid black'}}> 
                <div className ="card-text-1" style = {{display:'flex',justifyContent:'space-between'}} >
                    <span style = {{fontSize:'24px',fontWeight:'500'}}> {itemain?.info?.name} </span>
                    <span style= {{fontWeight:'600'}}> {itemain?.info?.rating?.rating_text} </span>
                </div>
                <div className="card-text-2" style = {{display:'flex',justifyContent:'space-between'}}>
                   <span style= {{fontWeight:'600'}}>   {itemain?.info?.cuisine?.map((item) => item.name).slice(0,3)}  </span>
                    <span style= {{fontWeight:'600'}}>{itemain?.info?.cfo?.text}  </span>
                </div>
          </div>

         <div className="card-bottom-ad" style= {{padding:'2%'}}>
            <span> {itemain?.bottomContainers[0]?.text} </span>    
         </div>
    </div>
  )
}
export default Card