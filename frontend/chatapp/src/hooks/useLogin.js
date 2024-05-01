import {useState} from 'react'
import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const login = async ({ username, password }) => {
        const success = handleUserLogin(username, password);
        if(!success) return;
        setLoading(true)
        try {
            const res = await fetch('/api/auth/login',{
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({username, password})
            });

            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }

            localStorage.setItem('chat-user', JSON.stringify(data));
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
        
    }
    return {loading, login};
}

export default useLogin;

const handleUserLogin = (username, password)=>{
    if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}
    if(password.length < 6){
        toast.error("Password must be >= to 8");
		return false;
    }
	return true;
}