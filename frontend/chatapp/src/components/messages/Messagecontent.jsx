import Messageinput from './Messageinput'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import { useEffect, useRef } from 'react'
import useListenMessages from '../../hooks/useListenMessages'

const Messagecontent = () => {
    const { messages, loading } = useGetMessages();
    useListenMessages();
    const lastMessageRef = useRef();

    useEffect(()=>{
        setTimeout(()=>{
            lastMessageRef.current?.scrollIntoView({ behavior : "smooth" })
        }, 100)
    },[messages])

    return (
        <>
            <div className="message-container md:w-full md:h-[83%] md:p-5 xl:overflow-y-scroll md:overflow-y-scroll border-b-2 border-black xl:h-[80%] h-[82.5%] overflow-y-scroll">

                {!loading && messages.length > 0 && messages.map((message)=>(
                    <div key={message._id} ref={lastMessageRef}>
                        <Messageinput message={message}/>
                    </div>
                ))}

                {loading && [...Array(4)].map((_, idx) => <MessageSkeleton key={idx} />)}

                {!loading && messages.length === 0 && (
                    <p className='text-center text-white'>Send a message to start conversation</p>
                )}
            </div>
        </>
    )
}

export default Messagecontent