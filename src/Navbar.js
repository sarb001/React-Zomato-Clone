import React from 'react'
import './Navbar.css';
import {FcSearch} from 'react-icons/fc';

 function Navbar() {
  return (
            <div className ='container'>
                <div className = 'navbar-bg'>
                        <div className="navbar-content">
                            <div className = "navbar-first">
                                    <span> Get the App  </span>
                            </div>
                            <div className = "navbar-second">
                                    <ul>
                                        <li> <a  href = "#"> Investor Relations </a> </li>
                                        <li> <a  href = "#"> Add restaurant </a> </li>
                                        <li> <a  href = "#"> Log in  </a> </li>
                                        <li> <a  href = "#"> Sign up </a> </li>
                                    </ul>
                            </div>
                                
                        </div>

                            <div className = "zomato-info" >
                                <span>   <img src = "/zomato_white_logo-removebg-preview.png"  alt = "zomato-logo"  style = {{width:'20%'}} />  </span>  
                                <span style = {{fontSize:'45px'}}>  Discover the best foods &  drinks in Phillaur   </span>
                            </div>

                                <div className="input-cover">
                                    <div className = "input-bar">
                                        <span id = "search-icon" >  <FcSearch />  </span>
                                        <span> <input  type = "text" id = "input-main"  />    </span>
                                        
                                    </div>
                                </div>
                </div>

                 <div className="section-second">
                     <h2> Seodn   </h2>
                 </div>

            </div>
  )
}

export default  Navbar
