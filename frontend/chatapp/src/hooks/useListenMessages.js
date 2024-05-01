import { useSocketContext } from "../context/SocketContext";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../store/conversationSlice";
import { useEffect } from "react";

import notificationSound from '../assets/sounds/bubble.mp3'

const useListenMessages = ()=>{
    const dispatch = useDispatch();
    const {socket} = useSocketContext();
    const messages = useSelector((state)=>state.getConversations.messages);


    useEffect(()=>{
        socket?.on("newMessage", (newMessage) => {
            const sound = new Audio(notificationSound);
            sound.play();
            dispatch(setMessages([...messages, newMessage]));
        })

        return () => socket?.off("newMessage");
    },[socket, messages, setMessages]);
}

export default useListenMessages;