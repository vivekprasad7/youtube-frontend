import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../utils/slices/appSlice'
import { useParams, useSearchParams } from 'react-router-dom'

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
        <div className='p-5 m-5'>
            <h1>WatchPage</h1>
            <iframe width="1200" 
            height="600" 
            src={"https://www.youtube.com/embed/0lKRM76uFeI?si=" + searchParams.get("v")}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen></iframe>


        </div>
    )
}

export default WatchPage