import React from 'react'
import './Navbar.css';
import {FcSearch} from 'react-icons/fc';

 function Navbar() {
  return (
    <div className = 'navbar-bg'>
        <div className="navbar-content">
            <div className = "navbar-first">
                    <span> Get the App  </span>
            </div>
            <div className = "navbar-second">
                    <ul>
                        <li> <a href = "#" > Investor Relations </a> </li>
                        <li> <a  href = "#"> Add restaurant </a> </li>
                        <li> <a  href = "#"> Log in  </a> </li>
                        <li> <a  href = "#"> Sign up </a> </li>
                    </ul>
            </div>
                  
        </div>

            <div className="image" style = {{color:"whitesmoke"}}>
                <img src = "/zomato_white_logo-removebg-preview.png" />
                <span>  Discover the best foods &  drinks  </span>
            </div>

                <div className="input-bar">
                <FcSearch />
                     <input  type = "text"  />
                </div>


    </div>
  )
}

export default  Navbar
