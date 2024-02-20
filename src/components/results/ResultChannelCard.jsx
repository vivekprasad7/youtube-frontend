import React from 'react'

const ResultChannelCard = ({data}) => {
    const {snippet} = data

    const {channelTitle, title,  description, thumbnails} = snippet

    console.log(thumbnails.medium)

  return (
    <div className='flex p-2 m-2 border border-slate-200 rounded-lg cursor-pointer'>
        <img  className="m-2" src={thumbnails.medium.url} alt="channel-thumbnail" />

        <div className='p-2'>
        <h2 className='text-base text-slate-500 pb-2'>{title}</h2>

            <div className='flex'>
            <img  className="w-8 rounded-full mr-2" src={thumbnails.medium.url} alt="channel-thumbnail" />

            <h3 className='font-bold'>{channelTitle}</h3>
            </div>
            <p className='text-base text-gray-500'>{description}</p>
        </div>

    </div>
  )
}

export default ResultChannelCard