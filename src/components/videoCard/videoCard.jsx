import React from 'react'

const VideoCard = ({video}) => {
    console.log(video)
    const { statistics, snippet} = video
    const {channelTitle, title, thumbnails} = snippet

  return (
    <div className='p-2 m-2 w-72 h-84 shadow rounded-sm inline-block'>
        <img className="rounded-lg w-max" src={thumbnails.medium.url} alt="video" />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li className=''>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>

    </div>
  )
}

// Higher Order Component
export const AdVideoCard = ({video}) => {
  return(
    <div className='p-1 m-1 border border-red inline-block'>
      <VideoCard video ={video}/>
    </div>
  )
}

export default VideoCard