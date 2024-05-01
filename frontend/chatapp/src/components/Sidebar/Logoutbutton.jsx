import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import useLogout from '../../hooks/useLogout';

const Logoutbutton = () => {
  const {loading, logout} = useLogout();
  return (
    <>
        <div className="logout-container md:w-full md:h-[5%] md:flex md:justify-center md:items-center md:my-3 w-full absolute flex items-center justify-center bottom-[1em]">
          {
            !loading ? (
              <button className='md:bg-stone-800 md:w-[50%] md:top-[0.5em] md:h-[80%] md:text-white md:flex md:justify-center md:item-center md:gap-2 md:text-lg md:rounded-full md:font-semibold xl:py-[0.5em] md:py-[0.5em] flex bg-zinc-900 w-[8em] h-[2em] bottom-6 absolute gap-5 items-center justify-center text-xl rounded-full text-white lg:md-[25%]' onClick={logout}>Logout <span className='md:my-[0.3em]'><IoIosLogOut color='white'/></span></button>
            ) : (
              <span className='loading loading-spinner'></span>
            )
          }
        </div>
    </>
  )
}

export default Logoutbutton