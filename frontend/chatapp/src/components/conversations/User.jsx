import {useDispatch, useSelector} from 'react-redux'
import {setSelectedUser} from '../../store/conversationSlice'
import { useSocketContext } from '../../context/SocketContext';


const User = ({conversation, lastIdx}) => {
    const dispatch = useDispatch();
    const selectUser = useSelector((state)=>state.getConversations.selectUser);

    const isSelected = selectUser === conversation._id;

    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id)

    return (
        <>
            <div className={`user-container md:w-full md:h-[5em] md:flex md:items-center md:gap-5 md:px-2 md:cursor-pointer hover:bg-blue-200 rounded-xl ${isSelected ? "bg-lime-500" : ""} flex gap-10 text-black font-semibold items-center text-xl px-5 cursor-pointer`} onClick={()=>{
                 dispatch(setSelectedUser(conversation))
            }}>
                <div className={`${isOnline ? "bg-blue-400" : ""}  w-[4em] h-[4em] flex justify-center items-center rounded-full`}>
                    <div className={"profile-container w-[3em] md:h-[75%] md:rounded-full"}>
                        <img src={conversation.profilePic} alt="profile" className='md:rounded-full'/>
                    </div>
                </div>
                <p className='md:text-xl md:text-black md:font-semibold'>{conversation.fullName}</p>
            </div>
            {!lastIdx && <div className='divider my-0 py-0 mx-1 h-[0.1em] bg-white'/>}
        </>
    )
}

export default User