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
    <div className=' w-full mx-2 rounded-lg shadow-2xl overflow-hidden'>

    <div className='bg-color-white p-2'>
        <h2 className='font-bold'>Live Chat</h2>
    </div>
    <div className='bg-slate-100 w-full h-[500px] overflow-y-scroll flex flex-col-reverse '>
        
            {
                chatMessages?.map((c, index) =><ChatMessage key={index} name={c.name} message={c.message}/>)
            }

      

    </div>
    <form onSubmit={(e) => {
        e.preventDefault()
        dispatch(addMessage({
            name:"Vivek",
            message: newMessage
        }))
        // setNewMessage("")
    }}className='w-full m-1'>
      <input className='w-[84%] p-2 px-2 ' 
      value={newMessage}
      onChange={(e) => setNewMessage(e.target.value)}
      type="text" 
      /><button className='bg-black text-white p-2 rounded-lg cursor-pointer'>Send</button>
  </form>
  </div>
  )
}

export default LiveChat