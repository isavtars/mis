import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar'
import { useParams,useNavigate } from "react-router-dom";
import api from "../../api/config"




//
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Updatebook = () => {
  const { id } = useParams(); 
  const idx=id.toString();
  const navigate =useNavigate();
  console.log(id)
  console.log(id)
  console.log(id)
  //  const book = useLocation().state.book;
  // console.log(book)
  // console.log(book.id)

  // const {id}= useparams();

  const [inputlist, setinputlist] = useState({
     name:"",
  author:"",
  gener:"",
  decriprions:"",

  }) //this is obj
  const [imagelist, setimagelist] = useState() //this is obj


  

 

  
const handleclick= (e) => {
 
  setinputlist((oldmonk)=>{
   return { 
     ...oldmonk,
     [e.target.name]:e.target.value,
   }
  })
}


useEffect(() => {
  const getuser=async()=>{
  try{
    const response= await api.get(`/book/${idx}`);
    console.log(response.data)
    setinputlist(response.data)
    setimagelist(response.data)

  }catch(err){
    console.log(err)
  }
  }
  getuser()
}, [])


  ///update
  const edits=async(e,id)=>{
    e.preventDefault();
  try{

    const updatedate= {
      ...inputlist,
      image:imagelist,
    };
 
    const response=await api.patch(`/book/update/${idx}`, updatedate,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
    );
   
console.log(response)
    if(response.data._id){
    console.log(response.data.id)
    e.target.reset();
    setinputlist({})
    setimagelist()
    toast.success("update book sucess")

    setTimeout(()=>{
      navigate("/book");
     },2000)
   
    }else{
      toast.error("eroor while editsbook")
    }

  }catch(err){
    console.log(err)
   
  }
 
  }
 

  return (
    <div>

<div className="navbar" style={{position:"sticky",top:0,zIndex:9999}}>
    <Navbar/>
    </div>
    <div className="updatepages">

   
    <div  className='formdiv'>
{/* 
<ToastContainer /> */}

<ToastContainer />
    <form onSubmit={edits} >    
     <label htmlFor="name">name</label> 
      <input type="text"   placeholder="" name='name'  onChange={handleclick} value={inputlist.name}/>
      <label htmlFor="author">author</label>
      <input type="text"   placeholder="" name='author'  onChange={handleclick} value={inputlist.author}/>
      <label htmlFor="gener">genra</label>
      <input type="text"   placeholder='' name='gener'  onChange={handleclick} value={inputlist.gener}/>

        <label htmlFor="gener">price</label>
      <input type="text"   placeholder='' name='price'  onChange={handleclick} value={inputlist.price}/>


      <label htmlFor="decriprions">discription</label>
     <textarea name="decriprions"  rows="10"  onChange={handleclick} value={inputlist.decriprions}></textarea>
     <input type="file" name="image" onChange={(e)=> setimagelist(e.target.files[0])} />
     <input type="submit" value="update"  />
  
    </form>
</div>

    </div>
    </div>
  )
}

export default Updatebook