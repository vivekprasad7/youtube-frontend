import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../utils/slices/appSlice'
import { useParams, useSearchParams } from 'react-router-dom'
import  { CommentsContainer } from '../comments/CommentsList'

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
        <div className='flex flex-col'>
        <div className='p-5 m-5'>
            <h1>WatchPage</h1>
            <iframe width="1200" 
            height="600" 
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen></iframe>


        </div>
        <div>
            <CommentsContainer/>
        </div>
        </div>
    )
}

export default WatchPage