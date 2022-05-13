import { createSlice } from "@reduxjs/toolkit";

export const roomSlice = createSlice({
    name:"room",
    initialState:{
        name:"",
        id:"",
        username:""
    },
    reducers:{
        update:(state,action)=>{
            state.id = action.payload.roomId;
            state.name = action.payload.roomName;
            state.username = action.payload.userName;
        }
    }
});

export const {update} = roomSlice.actions;
export default roomSlice.reducer;