import React from 'react'
import './Footer.css';

function Footer() 
{
  return (
    <div className = 'footer-section'>
            <div className="first-footer">
                <span>  </span>
            </div>
            <div className="second-footer" style = {{display:'flex'}}>

                <span id = "footer-part-1">
                    <ul id = "footer-ul">
                    <span id = "zomo-1"> ABOUT ZOMATO  </span>
                        <li> Who we are  </li>
                        <li> Blog   </li>
                        <li> Work With Us  </li>
                        <li> Report Fraud  </li>
                        <li> Contact Us   </li>
                    </ul>
                </span>

                <span id = "footer-part-1">
                    <ul id = "footer-ul" >
                <span id = "zomo-2"> ZOMAVERSE  </span>
                        <li> Zomato </li>
                        <li> Feeding India   </li>
                        <li>  Hyperpure  </li>
                        <li> Zomaland   </li>
                    </ul>
                </span>

                <span id = "footer-part-1">
                    <ul id = "footer-ul" >
                <span id = "zomo-3" > LEARN MORE   </span>
                        <li> Privacy  </li>
                        <li>  Security  </li>
                        <li> Terms  </li>
                        <li> Sitemap  </li>
                    </ul>
                </span>
            </div>
    </div>
  )
}
export default  Footer