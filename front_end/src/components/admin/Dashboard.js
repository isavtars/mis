import React,{useState,useEffect} from 'react'
import Navbar from './../Navbar';
import api from "../../api/config"
import "../../global.css"

import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Link} from "react-router-dom";

const Dashboard = () => {

  // let navigate = useNavigate();

  const [booklist, setbooklist] = useState([])
  useEffect(() => {   
     const bookfectch= async()=>{     
    const response= await api.get("/book");
    console.log(response.data)
    setbooklist(response.data)
     }
     bookfectch()
  }, [])
  

  //DELETE=IN CRUD D
  const deletebook=async(id,idx)=>{

     //id=book.id
     //idx=index
    //  console.log(idx)
     console.log(id)
    try{
      const response=await api.delete(`/book/delete/${id}`);
      console.log(response)
      if(  window.confirm("are sure to delete ")){
      
      if(response.data.sucess){
        console.log("book deleete suceess")
            toast.success("sucessfully delete")
         const newbboklist=booklist.filter((fitor,index)=>{
          return index!==idx;  //idx=index
        })
        setbooklist(newbboklist)
      }
      else{
        console.log("book doesnot delete")
        toast.error("error to delete book")
      }
      }else{
        toast.error("your confirm is cancell")
      }
      
      
    }catch(err){
      console.log(err)
    }

  }



  // /update
  // const edits=async(id,idx)=>{
  // try{

  //   const response=await api.put(`/book/update/${id}`);
  //   console.log(response)
  // }catch(err){
  //   console.log(err)
  // }
  
  // }
 
  
  return (
    <div className='ddashboard'>

<div className="navbar" style={{position:"sticky",top:0,zIndex:9999}}>
    <Navbar />
    </div>

       <div className="booklist">
       <ToastContainer />

     
       <div className="booklistcont">
       {booklist.map((book,index)=>{

        return <div className="bookdiv" key={index} >
              
          <h3 className='index'>{index}</h3>
          <img src={book.image} alt=""  className='smallimg'/>
          <h1 className='name'>{book.name}</h1>

          {/* //TODO */}
{/*           
          <FaRegEdit size={20} color="green" className='deleicon'  onClick={()=>navigate("/dashboard/updatebook",{
            state:{
              book,
            }
          })} /> */}

          <Link to={`/dashboard/updatebook/${book._id}`}>
            
          {console.log(book._id)}
          <FaRegEdit size={20} color="green" className='deleicon'/>    
          </Link>

       <AiFillDelete size={20} color="red" className='deleicon' onClick={()=>deletebook(book.id,index)} />
        </div>
       })}

       </div>
       
       </div>
    </div>
  )
}

export default Dashboard

//  navigate("/book/exploarbook",{
//   state:{
//     item
//   },