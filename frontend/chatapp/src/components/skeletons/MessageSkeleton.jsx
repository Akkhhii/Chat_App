import React from 'react'

const MessageSkeleton = () => {
    return (
        <>
            <div className='flex gap-3 items-center'>
				<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
				<div className='flex flex-col gap-4'>
					<div className='skeleton xl:h-10 xl:w-96 md:h-10 md:w-72 '></div>
					<div className='skeleton xl:h-10 xl:w-96 md:h-10 md:w-72'></div>
				</div>
			</div>
			<div className='flex gap-3 items-center justify-end'>
				<div className='flex flex-col gap-4'>
					<div className='skeleton xl:h-10 xl:w-96 md:h-10 md:w-72'></div>
				</div>
				<div className='skeleton xl:w-10 xl:h-10 rounded-full shrink-0'></div>
			</div>
        </>
    )
}

export default MessageSkeleton