import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../../utils/constants'
import VideoCard, { AdVideoCard } from '../videoCard/videoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

  const [ videos, setVideos] = useState([])

  useEffect( () => {
    fetchData()
  },[])

  const fetchData = async () => {
    const res =  await fetch(YOUTUBE_VIDEOS_API)
    const json = await res.json()
    console.log("initial fetch videos", json)
    setVideos(json.items)
  }

  return (
    <div className='flex flex-wrap gap-2 m-auto justify-center p-2'>
      {/* { videos && <AdVideoCard video={videos[0]}/>} */}
      {
        videos?.map((video) => <Link  key={video.id} to={"/watch?v=" + video.id} ><VideoCard video={video}/></Link>)
      }
    </div>
  )
}

export default VideoContainer