import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className = 'footer-section'>
            <div className="first-footer">
                <span>  </span>
            </div>
            <div className="second-footer">
                <span>
                    <span> ABOUT ZOMATO  </span>
                    <ul>
                        <li> Who we are  </li>
                        <li> Blog   </li>
                        <li> Work With Us  </li>
                        <li> Report Fraud  </li>
                        <li> Contact Us   </li>
                    </ul>
                </span>

                <span>
                <span> ZOMAVERSE  </span>
                    <ul>
                        <li> Zomato </li>
                        <li> Feeding India   </li>
                        <li>  Hyperpure  </li>
                        <li> Zomaland   </li>
                    </ul>
                </span>

                <span>
                <span> LEARN MORE   </span>
                    <ul>
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