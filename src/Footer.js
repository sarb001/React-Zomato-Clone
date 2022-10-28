import React from 'react'
import './Footer.css';

function Footer() 
{
  return (
    <div className = 'footer-section' style = {{backgroundColor:'whitesmoke',width:'100%'}}>
            
            <div className="second-footer" style = {{display:'flex',fontSize:'21px',justifyContent:'space-around'}}>
                <div id = "footer-part-1" style=  {{display:'flex'}}>
                        <ul style = {{listStyleType:'none'}}>
                            <li> ABOUT ZOMATO </li>
                            <li> Who we are  </li>  
                            <li> Blog  </li>  
                            <li>  Work With Us  </li>  
                            <li>  Report Fraud   </li>  
                            <li> Contact Us  </li> 
                        </ul>
                         
                </div>

                <span id = "footer-part-1">
                    <ul style = {{listStyleType:'none'}}>
                <span id = "zomo-2"> ZOMAVERSE  </span>
                        <li> Zomato </li>
                        <li> Feeding India   </li>
                        <li>  Hyperpure  </li>
                        <li> Zomaland   </li>
                    </ul>
                </span>

                <span id = "footer-part-1">
                    <ul style = {{listStyleType:'none'}}>
                <span id = "zomo-3" > LEARN MORE   </span>
                        <li> Privacy  </li>
                        <li>  Security  </li>
                        <li> Terms  </li>
                        <li> Sitemap  </li>
                    </ul>
                </span>
            </div>

            <div style = {{paddingLeft:'13%',paddingRight:'13%'}}>
                <p>
                 By continuing past this page, you agree to our Terms of Service,
                                    Cookie Policy, Privacy Policy and Content Policies. All trademarks are 
                                    properties of their respective owners. 2008-2022 © Zomato™ Ltd. All rights
                                    reserved. 
                </p>
            </div>
    </div>
  )
}
export default  Footer