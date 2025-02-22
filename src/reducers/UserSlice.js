import { createSlice } from '@reduxjs/toolkit'

export  const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
     login:(state,action)=>{  
        state.user = action.payload;

     },
     
    }
});
 export const login= userSlice.actions;
 export const selectUser  = (state) => state.user.user;
 export const userReducer= userSlice.reducer;