import React from 'react'

const ResultVideoCard = ({data}) => {
    const { snippet, id} = data
    const {videoId} = id
    const {channelTitle, description, title, thumbnails} = snippet
  return (
    <div className='flex p-2 py-3 m-2 rounded-lg border border-slate-200'>
        <img src={thumbnails.medium.url} alt="channel-thumbnail" />
        <div className='ml-2'>
            <h3  className='text-black font-bold'>{title}</h3>
            <div className='flex py-2'>
            <img className='w-6 mr-2  rounded-full' src={thumbnails.default.url} alt="channel-thumbnail" />
            <h3 className=' text-gray-800'>{channelTitle}</h3>
            </div>
            <p className='text-slate-500'>{description}</p>

        </div>
    </div>
  )
}

export default ResultVideoCard