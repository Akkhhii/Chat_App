import {useState, useEffect} from 'react'
import toast from 'react-hot-toast';

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([])

  useEffect(()=>{
    const getConversations = async ()=>{
        setLoading(true)
        try {
            const storedUser = JSON.parse(localStorage.getItem('chat-user'));
            const token = storedUser?.token;

            const res = await fetch('https://chatbuddy-zf63.onrender.com/api/users',{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  }
            });
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }

            setConversations(data);
            
        } catch (error) {
            toast.error(error.message)

        } finally{
            setLoading(false)
        }
    }
    getConversations()
  },[])

  return {loading, conversations}

}

export default useGetConversation