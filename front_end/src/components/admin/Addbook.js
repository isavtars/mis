import React,{ useState} from 'react'
import "./AddBook.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//this conig from the baseurl making
import  api from "../../api/config"
import Navbar from '../Navbar';
import { useNavigate } from "react-router-dom";


//validate form
// import {string,required,object}  from 'yup';

const Addbook = () => {
  let navigate = useNavigate();

 
const [input, setinput] = useState({
  // name:"",
  // author:"",
  // gener:"",
  // decriprions:"",

}) //this is obj
const [image, setimage] = useState() //this is obj


const handleclick=async (e) => {
 //yup

 
//  const  formvalidateschema = object({
//   name: string().required(),
//   author:string().required(),
//   gener:string().required(),
//   decriprions:string().required(),


// });


// const formdata={

//    name:e.target[0].value,
// author:e.target[0].value,
// gener:e.target[0].value,
// decriprions:e.target[0].value,
// }
// const isvalid= await formvalidateschema.isvalid(formdata);

 setinput((oldmonk)=>{

  return { 
    ...oldmonk,
    [e.target.name]:e.target.value,
    
  }
 })

// setinput({...input,[e.target.name]:e.target.value,})
}

const addbook= async(e)=>{
e.preventDefault();
try {
  //CREATE_POST=>IN CRUD
  const response = await api.post(
    "/book/add",
    {
      ...input,
      image:image,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  if(response.data._id){
    console.log(response)
    console.log("suceess to add book")
    toast.success("Add book sucessfully")
    e.target.reset();
    setinput({})
     setimage()
    

     setTimeout(()=>{
      navigate("/book");
     },2000)
  }else{
    console.log("error while book adding")
    toast.error("Book not ADD")
  }

  // console.log(response)
}catch(err){
  console.log(err)
}

}

  return (
    <>
  
    <div className="navbar" style={{position:"sticky",top:0,zIndex:9999}}>
    <Navbar />
    </div>
    <div  className='formdiv'>

        <ToastContainer />
            <form  onSubmit={addbook} >              
             <label htmlFor="name">name</label>
              <input type="text"   placeholder='' name='name'  onChange={handleclick} value={input.name} /> 
            <label htmlFor="author">author</label>
              <input type="text"   placeholder='' name='author'  onChange={handleclick} value={input.author}/> 

              <label htmlFor="prise">prise</label>
              <input type="text"   placeholder='' name='price'  onChange={handleclick} /> 

              <label htmlFor="gener">genra</label>
              <input type="text"   placeholder='' name='gener'  onChange={handleclick} value={input.gener}/> 
              <label htmlFor="decriprions">discription</label>
             <textarea name="decriprions"  rows="10"  onChange={handleclick} value={input.decriprions}></textarea>


             <input type="file" name="image" onChange={(e)=> setimage(e.target.files[0])} />

             <input type="submit" value="submit" />
            </form>
    </div>
    </>
  )
}

export default Addbook

