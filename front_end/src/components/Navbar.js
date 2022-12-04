import React from 'react'
import "../global.css"
import { NavLink } from 'react-router-dom'
// import Dashboard from './admin/Dashboard';


import "../assets/css/Navbar.css"
import {AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai';


import {BsBookHalf} from "react-icons/bs"


const Navbar = () => {
  return (
    <div className='navcont'>


<nav >
        <div className="logo"><NavLink  to="/" ><BsBookHalf/>BooKCarRt</NavLink></div>
          


          <div className="search">
            <input type="text" placeholder='search heare...' />
            <div className="icon">
              <AiOutlineSearch size={30} color="white"/>
            </div>
          </div>

          <div className="addtocart">
            <AiOutlineShoppingCart size={30} />
          </div>

          <div className="advetrise">
            Mobileapp
            comingsoon..
          </div>
      
       </nav>
       
    </div>
  )
}

export default Navbar