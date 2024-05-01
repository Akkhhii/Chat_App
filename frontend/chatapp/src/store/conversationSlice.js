import { createSlice } from "@reduxjs/toolkit";

export const conversationSlice = createSlice({
    name : "getConversations",
    initialState : {
        selectUser : null,
        messages : [],
        navVal : false,
    },
    reducers : {
        setSelectedUser : (state, action)=>{
            state.selectUser = action.payload;
        },
        setMessages : (state, action)=>{
            state.messages = action.payload;
        },
        setNav : (state, action)=>{
            state.navVal = action.payload;
        },
    }
    
})


export const {setSelectedUser, setMessages, setNav} = conversationSlice.actions;

export default conversationSlice.reducer;

