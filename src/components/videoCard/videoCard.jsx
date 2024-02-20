import React from 'react'

const VideoCard = ({video}) => {
    // console.log(video)
    const { statistics, snippet} = video
    const {channelTitle, title, thumbnails, publishedAt} = snippet

    const viewCount = (views) => {
      if(views > 1000000){
        const viewCount = Math.trunc(views/1000000) + "M"
        return viewCount
      } else if(views > 100000){
        const viewCount = Math.trunc(views/100000) + "K"
        return viewCount
      } 
    }

    function daysAgo(publishedAt) {
      const publishedDate = new Date(publishedAt);
      const currentDate = new Date();
      const millisecondsPerDay = 1000 * 60 * 60 * 24;
      const differenceInTime = currentDate - publishedDate;
      const differenceInDays = Math.floor(differenceInTime / millisecondsPerDay);
      return differenceInDays;
    }
    
  
    

  return (
    <div className='py-2 my-2 md:m-2 md:p-2s overflow-hidden w-full md:w-[340px] md:max-w-[340px]'>
        <img className="md:rounded-lg w-full md:max-w-[340px] aspect-video relative" src={thumbnails.medium.url ? thumbnails.medium.url : thumbnails.default.url} alt="video" />
        <ul className='h-[65%] top-1'>
            <li className='font-bold py-2 text-sm text-ellipsis overflow-hidden'>{title}</li>
            <li className='font-bold text-gray-700 '>{channelTitle}</li>

            <li  className=' text-slate-500 text-sm '>{viewCount(statistics.viewCount) } Views </li>
            <li  className=' text-slate-500 text-sm'>  {daysAgo(publishedAt) > 1 ? daysAgo(publishedAt) + " Days Ago" :daysAgo(publishedAt) + " Day Ago" } </li>

        </ul>

    </div>
  )
}

// Higher Order Component
export const AdVideoCard = ({video}) => {
  return(
    <div className='p-1 m-1 border border-red inline-block cursor-pointer'>
      <VideoCard video ={video}/>
    </div>
  )
}

export default VideoCard