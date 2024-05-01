import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast'
import { setMessages } from '../store/conversationSlice';

const useSendMessage = () => {
    
    const [loading, setLoading] = useState(false);
    const messages = useSelector((state)=>state.getConversations.messages);
    const selectedUser = useSelector((state)=>state.getConversations.selectUser);
    const dispatch = useDispatch();

    const sendMessage = async (message)=>{
        setLoading(true);
        try {
            const res = await fetch(`/api/message/send/${selectedUser._id}`,{
                method : "POST",
                headers : {
                    "Content-Type": "application/json",
                },
                body : JSON.stringify({message}),
            });

            const data = await res.json();
            if(data.error) throw new Error(data.error);
            
            dispatch(setMessages([...messages, data]));

        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    };

    return {sendMessage, loading};

};

export default useSendMessage;