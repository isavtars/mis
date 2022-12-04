import React,{useEffect,useState} from 'react'
import Navbar from './Navbar'
import "../global.css"
import { motion } from "framer-motion"
import Image from "../image/book3.jpg"

import {useDispatch,useSelector} from "react-redux";


//redux

import {fetchingProd} from "../redux/apiCalls.js"

const Homepage = () => {

  const dispatch=useDispatch();

  const product = useSelector((state) => state.product.product);
     console.log(product)

    


  useEffect(() => {
  
    fetchingProd(dispatch)
  }, [])


  
  
  return (
    <section>

   
   <div className="navbar" style={{position:"sticky",top:0,zIndex:9999}}>
    <Navbar />
    </div>

      <div className="homecontainer">
      <header>
        <h1 className='Book'>Books</h1>
           
      </header>

      <div className="productcontainner">
     
        {
          product.map((item,index)=>{
            return <div className='cartcont' key={index}>
            
            <div className="imagecart">
             <img src={item.image} alt="" /> 
            </div>
              <h4>{item.name}</h4>
              <h2 className='price'>Rs:{item.price
}</h2>
              
            </div>
          })
        }
      </div>
        
      </div>
    </section>
  )
}

export default Homepage;
