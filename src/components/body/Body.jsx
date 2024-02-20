import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import MainGrid from '../mainGrid/MainGrid'
import { Outlet } from 'react-router-dom'
import VideoContainer from '../videoContainer/videoContainer'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
        <Sidebar/>
        <VideoContainer />
    </div>
  )
}

export default Body