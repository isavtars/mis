import mongoose from "mongoose";

import "dotenv/config"


  const connections= async ()=>{
    try{
      mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("db connections suceessfully")
        }).catch((err)=>{
            console.log(err)
        })

    //  mongoose.connect.on("disconnected",()=>{
    //        console.log("mongoDd disconnected")
    //     })
        
    //     mongoose.connect.on("connected",()=>{
    //         console.log("mongoDd connected")
    //      })
 }

catch(err){
    console.log(err)
}

}


export default connections;

