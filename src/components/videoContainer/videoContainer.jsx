import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../../utils/constants'
import VideoCard from '../videoCard/videoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

  const [ videos, setVideos] = useState([])

  useEffect( () => {
    fetchData()
  },[])

  const fetchData = async () => {
    const res =  await fetch(YOUTUBE_VIDEOS_API)
    const json = await res.json()
    console.log(json)
    setVideos(json.items)
  }



  return (
    <div>
      {
        videos?.map((video) => <Link to={"/watch?v=" + video.id} ><VideoCard key={video.id} video={video}/></Link>)
      }
    </div>
  )
}

export default VideoContainer