import React from 'react'
import User from './User'
import useGetConversation from '../../hooks/useGetConversation'

const Users = () => {
  const { loading, conversations } = useGetConversation();
  return (
    <>
      <div className="user-container md:w-full md:h-[83%] md:p-3 overflow-y-scroll h-[78%]">
        {
          conversations.map((conversation, idx) => (
            <User
              key={conversation._id}
              conversation={conversation}
              lastIdx={idx === conversations.length - 1}
            />
          ))
        }

        {loading ? <span className='loading loading-spinner'></span> : null}
      </div>
    </>
  )
}

export default Users