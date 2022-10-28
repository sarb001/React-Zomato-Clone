import React from 'react'
import './Cards.css';

 function Card() {
  return (
    <div className='container-wrapper' >
         <div className="image-container" style = {{padding:'2%'}}>  
          <img src = "/pasta.-2 .png"  alt = "Chicken" style = {{width:'100%',borderRadius:'5%',height:'40vh'}}/>
              <div className="pr-extra-off"> Pro extra 20% OFF  </div>
              <div className="off-upto"> 50% OFF up to 100 </div>
               <span> 12 min </span>
         </div>
            <div className="card-text" style = {{paddingLeft:'5%',paddingRight:'5%',borderBottom:'3px solid black'}}> 
                <div className="card-text-1" style = {{display:'flex',justifyContent:'space-between'}} >
                    <span> Pritam Dhaba  </span>
                    <span>3.6</span>
                </div>
                <div className="card-text-2" style = {{display:'flex',justifyContent:'space-between'}}>
                   <span> North Indian , Chinese ,Pizza  </span>
                    <span> Rs. 100 for one  </span>
                </div>
          </div>
         <div className="card-bottom-ad" style= {{padding:'2%'}}>
            <span> 3150+ orders placed from here recently  </span>    
         </div>
    </div>
  )
}
export default Card