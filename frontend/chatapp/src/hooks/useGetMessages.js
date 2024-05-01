import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { setMessages } from '../store/conversationSlice'

const useGetMessages = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const messages = useSelector((state)=>state.getConversations.messages);
    const selectedUser = useSelector((state)=>state.getConversations.selectUser);
    
    // console.log(selectedUser._id);

    useEffect(()=>{
        const getMessages = async ()=>{
            setLoading(true);
            try {
                const res = await fetch(`/api/message/${selectedUser._id}`);
                const data = await res.json();
                if(data.error) throw new Error(data.error);
                dispatch(setMessages(data));
                
            } catch (error) {
                toast.error(error.message);
            }finally{
                setLoading(false);
            }
        };
        if(selectedUser) getMessages();

    }, [selectedUser, setMessages]);

    return {messages, loading}
};

export default useGetMessages;