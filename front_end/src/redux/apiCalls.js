import api from "../api/config.js"

import { getProductStart,
      getProductSucess,
      getProductFaillur
    } from "./prodctRedux.js"



    export const fetchingProd=async(dispatch)=>{

       dispatch(getProductStart())
        try{
         const response=await api.get("/book");
         dispatch(getProductSucess(response.data));
        }catch(err){
       dispatch(getProductFaillur());
       console.log(err)
        }
        
    }