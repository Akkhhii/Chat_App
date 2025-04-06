import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext()

  const signup = async({fullName, username, password, confirmPassword, gender}) =>{
    const success = handleSignUpError({fullName, username, password, confirmPassword, gender});

    if(!success) return console.log('No data present');

    try {
        const res = await fetch("/api/auth/signup",{
            method : "POST",
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify({fullName, username, password, confirmPassword, gender}),
        });
       
        const data = await res.json()
        console.log(data);
        if(data.error){
            throw new Error(data.error)
        }
        localStorage.setItem("chat-user", JSON.stringify(data))
        setAuthUser(data)

    } catch (error) {
        toast.error(error.messsage)
    } finally{
        setLoading(false)
    }
  }
  return {loading, signup}
}

export default useSignup

const handleSignUpError =  ({fullName, username, password, confirmPassword, gender})=>{
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error('Please fill all the fields')
        return false
    }

    if(password !== confirmPassword){
        toast.error('Password do not match')
        return false
    }

    if(password < 8){
        toast.error('Password lenght must be more than equal to 8 characters')
        return false
    }

    return true
}