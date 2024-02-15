import React, { useEffect } from 'react'
import { YOUTUBE_VIDEOS_API } from '../../utils/constants'

const VideoContainer = () => {

  useEffect( () => {
    fetchData()
  },[])

  const fetchData = async () => {
    const res =  await fetch(YOUTUBE_VIDEOS_API)
    const json = await res.json()
    console.log(json)
  }



  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer