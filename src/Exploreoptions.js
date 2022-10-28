import React, { useState } from 'react';
import './Exploreoptions.css';

import {RiArrowDownSLine} from 'react-icons/ri';
import { MdKeyboardArrowUp} from 'react-icons/md';

 function Exploreoptions() 
 {
     const [firstshow,setfirstshow]   = useState(false); 
     const [secondshow,setsecondshow] = useState(false); 

  return (
    <div className = 'explore-options'>
         <span style = {{fontSize:'35px'}}>  Explore options near me  </span>

         <div className = "first-accordian"  onClick  = {() => setfirstshow(!firstshow)}>
                <span id = "click-accordian" >  Popular cuisines  near me  { firstshow ?  <MdKeyboardArrowUp />  : <RiArrowDownSLine /> }   </span>
                { 
                   firstshow ?   <p> 
                   Beverages food near meBiryani food near meBurger food near meCafe
                    food near meChinese food near meCoffee food near meDesserts 
                    food near meIce Cream food near meItalian food near meJuices 
                    food near meMithai food near meMughlai food near meNorth
                     Indian food near mePizza food near meSalad food near meSandwich
                      food near meShake food near meStreet food near meTea food 
                   near meWraps food near me
                </p> : null 
                }
              
         </div>
    
         <div className = "second-accordian"  onClick  = {() => setsecondshow(!secondshow)}v>
                <span id = "click-accordian" >  Cities We Deliver To   { secondshow ?  <MdKeyboardArrowUp />  : <RiArrowDownSLine /> }   </span>
                { 
                   secondshow ?   <p> 
                   Beverages food near meBiryani food near meBurger food near meCafe
                    food near meChinese food near meCoffee food near meDesserts GIT 
                    food near meIce Cream food near meItalian food near meJuices 
                    food near meMithai food near meMughlai food near meNorth
                     Indian food near mePizza food near meSalad food near meSandwich
                      food near meShake food near meStreet food near meTea food 
                   near meWraps food near me
                </p> : null 
                }
         </div>        
    </div>
  )
}
export default  Exploreoptions