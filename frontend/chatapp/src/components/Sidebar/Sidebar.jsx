import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import Users from '../conversations/Users';
import Logoutbutton from './Logoutbutton';
import useGetConversation from '../../hooks/useGetConversation';
import { setSelectedUser } from '../../store/conversationSlice';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {

    const [search, setSearch] = useState('');
    const { conversations } = useGetConversation();
    const dispatch = useDispatch();

    const selectedUser = useSelector((state) => state.getConversations.selectUser);

    const navVal = useSelector((state) => state.getConversations.navVal);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast.error('Must be 3 or more characters')
        }
        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if (conversation) {
            dispatch(setSelectedUser(conversation));
            setSearch('')
        } else toast.error('No such user')
    }

    return (
        <>
            <div className={`sidebar-container md:backdrop-blur-md md:w-[30%] md:h-[94%] md:bottom-0 md:absolute md:border-r-2 md:border-zinc-800 md:flex md:flex-col mt-[4em] w-[100vw] xl:h-[94.2%] absolute h-[95%] z-20 ${navVal ? 'ml-[0%]' : 'ml-[100%]'} transition-all ease-in-out duration-500 bg-zinc-400 md:ml-[0] md:bg-transparent md:transition-none md:top-[em]`}>

                <form onSubmit={handleSubmit} className="search md:w-full md:h-[10%] md:flex md:justify-center md:items-center h-[12%] flex justify-center items-center gap-1 border-b-4 border-black lg:gap-1">

                    <input type="text" className='md:w-[70%] md:h-[30%] md:rounded-full border-white md:border-2 md:p-5 px-5 bg-transparent text-black font-semibold placeholder:text-zinc-800 text-lg w-[70%] p-[0.5em] rounded-full border-2' placeholder='Search...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />

                    <button type='submit' className="search-icon md:w-[4em] md:h-[4em] md:flex md:justify-center md:items-center">
                        <FaSearch size={30} color='black' className='cursor-pointer' />
                    </button>

                </form>
                <Users />
                <Logoutbutton />
            </div>
        </>
    )
}

export default Sidebar