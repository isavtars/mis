import React from 'react'
import Navbar from './components/Navbar'
import "./global.css"

import IMAGE from "./image/page.png"

const Page404 = () => {
  return (
    <div>
       <div className="navbar" style={{position:"sticky",top:0,zIndex:9999}}>
    <Navbar />
    </div>
      

      <div className="pagenotfound" >
      <img src={IMAGE} alt="" className='page404' />
      </div>
    
    </div>
  )
}

export default Page404