import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../../utils/slices/chatSlice';
import { randomNameGenerator } from '../../utils/helper';

const LiveChat = () => {

    const chatMessages = useSelector((store) => store.chat.messages)



    const [newMessage, setNewMessage] = useState("")

    console.log(chatMessages)
    const dispatch = useDispatch();

    useEffect(() => {
        

       const i = setInterval(() =>{
        console.log("API Polling")

        dispatch(addMessage(
            {
                name:randomNameGenerator(),
                message:"Aur Aur Aur"
            }
        ))

    }, 1500)

        return () => clearInterval(i)

    }, [])


  return (
    <div className='w-full'>
    <div className='bg-slate-200 w-full h-[600px] ml-2 rounded-lg shadow-lg overflow-y-scroll'>
        
        <div className=''>
            {
                chatMessages?.map((c, index) =><ChatMessage key={index} name={c.name} message={c.message}/>)
            }

        </div>
      

    </div>
    <form onSubmit={(e) => {
        e.preventDefault()
        dispatch(addMessage({
            name:"Vivek",
            message: newMessage
        }))
        // setNewMessage("")
    }}className='w-full'>
      <input className='w-[85%] p-2 px-2' 
      value={newMessage}
      onChange={(e) => setNewMessage(e.target.value)}
      type="text" 
      /><button className='bg-black text-white p-2 rounded-sm cursor-pointer'>Send</button>
  </form>
  </div>
  )
}

export default LiveChat