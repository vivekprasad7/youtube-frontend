import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../utils/slices/appSlice'
import { useParams, useSearchParams } from 'react-router-dom'
import  { CommentsContainer } from '../comments/CommentsList'
import LiveChat from '../liveChat/LiveChat'
import Sidebar from '../sidebar/Sidebar'

const WatchPage = () => {

    // const params = useParams()
    // console.log(params)

    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get("v"))


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <>
        <Sidebar/>
        <div className='flex flex-col w-full p-2 justify-center'>
        <div className='p-5 w-full flex justify-center'>
            <div>

            <iframe width="900" 
            height="600" 
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen></iframe>
            </div>

            <div className='w-full'>
                <LiveChat/>
            </div>

        </div>
        <div>
            <CommentsContainer/>
        </div>
        </div>
        </>
        
    )
}

export default WatchPage