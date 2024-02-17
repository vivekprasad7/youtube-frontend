import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex p-2'>
        <img className='w-8' src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png" alt="user" />
        <h3 className='px-2 font-bold'>{name}</h3>
        <p>{message}</p>
    </div>
  )
}

export default ChatMessage