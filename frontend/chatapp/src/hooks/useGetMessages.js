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
                const storedUser = JSON.parse(localStorage.getItem('chat-user'));
                const token = storedUser?.token;

                const res = await fetch(`https://chatbuddy-zf63.onrender.com/api/message/${selectedUser._id}`,{
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                      }
                });
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