import React from 'react'
import './Navbar.css';
import {FcSearch} from 'react-icons/fc';
import Exploreoptions from './Exploreoptions';

import Footer from './Footer';
import CarouselCollection from './CarouselCollection';
import Card from './Card';

 function Navbar() {
  return (
            <div className ='container'>
                <div className = 'navbar-bg'>
                        <div className = "navbar-content">
                            <div className = "navbar-first">
                                    <span> Get the App  </span>
                            </div>
                            <div className = "navbar-second">
                                    <ul id = "ul-data">
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

                 <div className = "section-cover">
                    <div className="carousel-cover" style = {{padding:'5% 0%'}}>
                            <CarouselCollection />
                    </div>
                    
                    <div className="card-cover" style = {{padding:'5% 0%'}}>
                            <Card />
                    </div>

                    <div className="explore-cover" style = {{padding:'5% 0%'}}>
                            <Exploreoptions />
                    </div>
                 </div>

                     <div className="footer-cover" >
                            <Footer />
                            
                     </div>

               
            </div>
  )
}

export default  Navbar
