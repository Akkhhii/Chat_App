import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import {setNav} from '../../store/conversationSlice'
import { useEffect, useState } from "react";

const Navbar = () => {
const dispatch = useDispatch();
const navVal = useSelector((state)=>state.getConversations.navVal);
const [navValue, setNavValue] = useState(false);

const handleNav = ()=>{
setNavValue(prev=>!prev)
dispatch(setNav(!navValue))
}


  return (
    <>
        <div className="logo-container w-full h-16  backdrop-blur-md from-transparent flex justify-center items-center fixed border-b-4 border-zinc-800 z-40">
            <img src="./chatlogo.png" alt="title logo" className='w-[5em] left-0 absolute md:w-[10em]'/>
            <h2 className='text-2xl text-gray-800 font-semibold md:text-3xl'><span className='text-4xl font-semibold text-stone-200 md:font-bold'>C</span>hat<span className='text-4xl font-semibold text-stone-200 md:font-bold'>B</span>uddy</h2>
            <RxHamburgerMenu className="absolute right-5 md:hidden xl:hidden lg:hidden cursor-pointer" size={30} color="white" onClick={handleNav}/>
        </div>
    </>
  )
}

export default Navbar