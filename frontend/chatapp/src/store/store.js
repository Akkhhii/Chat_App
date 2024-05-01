import {configureStore} from '@reduxjs/toolkit'
import conversationReducer  from './conversationSlice';

const store = configureStore({
    reducer :{
        getConversations : conversationReducer
    },
})

export default store