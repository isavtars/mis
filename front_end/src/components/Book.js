import React,{useEffect,useState} from 'react'
import api from "../api/config"
import "./Book.css"
import Navbar from './Navbar';
import { useNavigate,useParams } from "react-router-dom";




import "../assets/css/Home.css"

// import ReactLoading from 'react-loading';
import {Oval } from  'react-loader-spinner'




const Book = () => {
  let navigate = useNavigate();
const [bookdata, setbookdata] = useState([])
const [loading, setloading] = useState(true)

const [temporarydata, settemporarydata] = useState([])
const [searchtext, setsearchtext] = useState("")


  //GER_READ=>IN CRUD
  //for get all the book
    useEffect(() => {
      const fectdata= async()=>{
        try{        
          const response= await  api.get("/book");
          setbookdata(response.data)
          settemporarydata(response.data)
          setloading(false) 
          console.log(response)
        
        }catch(err){
          console.log(err)
        }
      }
      fectdata()
    }, [])

    


    
  //GER_READ=>IN CRUD
  //for get book by search
    useEffect(() => {
      const getbysearch= async()=>{
       try{
        const responseserch= await api.get(`/book/search/all?q=${searchtext}`);
        console.log(responseserch.data)
        setbookdata(responseserch.data)
       }
       catch(err){
        console.log(err)
       }
      }
     if (searchtext)getbysearch();
     else{setbookdata(temporarydata)}
    }, [searchtext,loading])
    

    
  return (
    <div className='allbook'>
    <div className="navbar" style={{position:"sticky",top:0,zIndex:9999}}>
    <Navbar />
    </div>

   
 
    <div className="search" style={{position:"sticky",top:55,zIndex:9999}}>
    
      <input className='inputbook' type="text" name='search' placeholder='search book' value={searchtext} onChange={(e)=>{
        setsearchtext(e.target.value)
        console.log(e.target.value)
      }} />
    </div>
   
    <div className='cart'>
          {bookdata.length>0?bookdata.map((item,index)=>{
               return <div key={index} className="cartCoint"  onClick={()=> navigate("/book/exploarbook",{
                state:{
                  item
                },
               })}>
                  <img src={item.image} alt={`${item.name}`} />
                <h1>{item.name}</h1>
              </div>
            }):loading?( <Oval color="#00BFFF" height={480} width={80} />):(<h1>image not found</h1>) 
           }
    </div>
    <h1 className='home'>home</h1>
    
    </div>
  )
}

export default Book