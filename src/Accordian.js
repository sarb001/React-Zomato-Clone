import React from 'react'
import { useState } from 'react'

 function Accordian() {

    const [show,setshow] = useState(false);

  return (
    <div className='home-side' style = {{padding:'3%' ,cursor:'pointer'}}>
        <div className = "accordian" onClick = {() => setshow(!show)}>
            <span style = {{fontSize:'24px'}}>  Cities we deliver to  </span>
            <span style = {{fontSize:'25px'}}>  {  show ? "-": "+" }  </span>    
        </div>

            {show ? <p id = "para-data" style = {{width:'20%',fontSize:'18px'}}>   
                        India Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Fugit molestiae eligendi sed 
                        numquam! Cumque iusto ullam alias, molestiae qui
                        s aliquam, consectetur ab, corporis iure pariatur
                        quae earum provident incidunt repellendus expedita
                        consequuntur quaerat qui. Harum nisi sed
                        modi totam accusamus sequi accusantium 
                        labore nulla. Alias?
                    </p> : null 
            }
        
    </div>
  )
}
export default Accordian
