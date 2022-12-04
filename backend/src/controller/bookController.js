// import { json } from "express";
import bookmodel from "../../database/models/bookadd.models.js";
// import { Children } from 'react';
import mongoose from "mongoose";

 export default class BookController {
    
//add book
    async addbook(req,res,imageName){
        try{      
        const data = new bookmodel({...req.body,  image:imageName});  //adding the req.body jsons() and the images
        const result =  await data.save()
        // res.send(result)

        if(result){
            res.json(result)
            console.log(result)
        } else res.json({sucess:false, Message:"error during book addd"})
    
        }catch(err){
        res.send(err)
        }
    }


    //getbyId
 async  getbyId (req,res){ // its work like same router.get("/:id",async (re,res)=>{})
   try{
    const {id}= req.params;
    if(id){

        const result =await bookmodel.findById(id);
        res.json(result)
    }else res.json({sucess:false, Message:"error during book addd"})
    

 }catch(err){

    console.log(err)
    res.json(err)
 }
}



///updatebyId

  async updatebyId(req,res,imageName){
    try{
      const id = mongoose.Types.ObjectId(req.params.id.trim());
     
      // const id= req.params.id;

      const update={...req.body, image:imageName}
      const opts = {new: true};
       
        
        
        if(id){
      // const data= await bookmodel.findOneAndUpdate(id,{...req.body, image:imageName})
      const data= await bookmodel.findByIdAndUpdate({_id:id},update,opts);
        console.log(data)
        res.send(data);
      //   if(data){
      //     // res.json(200,{data,sucess:true, Message:"sucess during update"})
      //   res.send(data);
      //   // res.json({sucess:true, message:"sucess eddits book"})
      // }
       

      //   else{
      //     res.json({sucess:false, Message:"error during edits book"})}
        
        }else res.json({sucess:false, Message:"error during edits boo"})
    }catch(err){
        res.send(err)
        console.log(err)
    }
  }


  //userdeleteById

  async userdeleteById(req,res){
  
    try{
        const {id}= req.params;
         

        if(id){
        const data= await bookmodel.findOneAndDelete(id);
        // res.send(data)
        res.json({sucess:true, message:"sucess fullydelete"})
        } else res.json({sucess:false, message:"error during book delete"})
    }catch(err){
        console.log(err)
        res.send(err)
    }
  }


  //searchall by fillter

  async searchall (req,res){
   try{
     const {q}= req.query;
     if(q){
      const data = await bookmodel.find( { $or: [{ name: q }, { author: q }, { gener: q }]});
      
      for (let d of data) {
        d.image = "http://localhost:8000/uploads/" + d.image;
        // console.log(d.image);
      }
      res.json(data)
      console.log(data)
}else{
    res.json("error")
}
   }catch(err){
    res.send(err)
    console.log(err)
   }
  }

  //getbook alll
  async getbook (req,res){
    try{
        let {limit}=req.query;
        if(!limit) limit =20;
      const data= await bookmodel.find().limit(limit);

      //{limit:parseInt(limit)}
        //loop fro get image  
        //"image": "http://localhost:8000/uploads/1655181292521-694271051-featured3.png
      for (let d of data) {
        d.image = "http://localhost:8000/uploads/" + d.image;
        // console.log(d.image);
      }


      res.send(data)
    }catch(err){
        console.log(err)
        res.send(err)
    }
  }

// res.send("hello from book")
  
}
