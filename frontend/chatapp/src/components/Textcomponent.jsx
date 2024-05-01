import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Messagecontent from './messages/Messagecontent'
import Inputcontainer from './messages/Inputcontainer'
import MessageContainer from './messages/MessageContainer'

const Textcomponent = () => {
    const [userName, setUserName] = useState('')

    const selectedUser = useSelector((state)=>state.getConversations.selectUser);  

    useEffect(() => {
        if (selectedUser) {
            setUserName(selectedUser.username);
        }
    }, [selectedUser]);
    
    return (
        <>
            <div className="chat-container md:backdrop-blur-md  md:w-[70%] md:h-[94%] lg:h-[95.5%]  md:bottom-0 md:right-0 md:absolute md:border-l-2 md:border-zinc-800 xl:visible md:visible xl:h-[94.2%] relative w-full h-[93%] top-16 md:top-[4em]">
                {
                    !selectedUser ? (
                        <MessageContainer/>
                    ) : (
                        <>
                                <div className="userinfo bg-zinc-400  w-full xl:h-[10%] md:h-[7%] flex items-center px-5 lg:h-[7%] h-[7%]">
                                    <span className='text-white text-lg font-semibold'>To -</span><span className='text-lg text-white ml-3 font-semibold tracking-widest '>{userName}</span>
                                </div>
                                <Messagecontent />
                                <Inputcontainer />
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Textcomponent
