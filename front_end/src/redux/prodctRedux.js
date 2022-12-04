import {createSlice} from "@reduxjs/toolkit";




const productSlice=createSlice({

    name:"product",

    initialState:{
        product:[],
        isFetching:false,
        error:false,
    },

    reducers:{

        //getAllProduct
        getProductStart:(state)=>{
            state.isFetching=true;
            state.error=false;
        },

         getProductSucess:(state,action)=>{
            state.product=action.payload;
            state.isFetching=false;
        },
         getProductFaillur:(state)=>{
             state.error=true;
            state.isFetching=false;
        }
        


    }

    
})


export  const {
     getProductStart,
      getProductSucess,
      getProductFaillur
}=productSlice.actions;

export default productSlice.reducer;