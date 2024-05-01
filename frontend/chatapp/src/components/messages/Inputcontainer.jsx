import { useState } from 'react'
import { FiSend } from "react-icons/fi";
import useSendMessage from '../../hooks/useSendMessage';

const Inputcontainer = () => {

    const [message, setMessage] = useState('');
    const { loading, sendMessage } = useSendMessage();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage('');
    }

    return (
        <>
            <div className="input-container  md:w-full md:h-[10%] md:flex md:items-center md:pl-5 md:pr-5 justify-center border-black border-t-2 xl:flex xl:justify-center md:flex-col xl:h-[10%] items-center flex">

                <form className="send md:w-[95%] md:h-[5%] md:flex md:items-center bottom-[1em] fixed flex w-[95%] justify-center gap-2 h-[3em] lg:bottom-[2em]" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className='md:w-[90%] md:h-12 border-2 border-black md:p-5 md:text-lg placeholder:text-black text-black w-[80%] rounded-full px-5 bg-transparent text-xl font-semibold placeholder:font-normal '
                        placeholder='Start texting....'
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }} />
                    <div className="send-icon md:w-[20%] md:p-2 md:h-[100%] xl:w-[10%] xl:h-[100%] xl-p-0 cursor-pointer justify-center flex items-center w-[8%] h-[3em] bg-zinc-900 rounded-full">
                        <button type='submit' className=''>
                            {loading ? <div className='loading loading-spinner'></div> :
                                <FiSend className='w-full h-full' size={24} color='white' />}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Inputcontainer