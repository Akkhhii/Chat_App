import { useSelector } from 'react-redux';
import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/timeformatt';

const MessageInput = ({ message }) => {
    const {authUser} = useAuthContext();
    const selectedUser = useSelector((state) => state.getConversations.selectUser);
    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedUser?.profilePic;
    const chatBg = fromMe ? 'bg-lime-500' : '';
    const textColor = chatBg === 'bg-lime-500' ? 'text-black' : 'text-white' 
    const timeFormatt = extractTime(message.createdAt);


    return (
        <>
            <div className={`chat ${chatClassName} text-white xl:mb-10`}>
                <div className="chat-image avatar md:w-10 md:h-10 w-10 h-10">
                    <div className="xl:w-14 rounded-full">
                        <img alt="User profile" src={profilePic} />
                    </div>
                </div>
                <div className={`chat-bubble ${textColor} xl:w-[${message.length}] ${chatBg}`}>{message.message}</div>
                <div className="chat-footer opacity-50 text-white font-semibold">
                    {timeFormatt}
                </div>
            </div>
        </>
    );
};

export default MessageInput;