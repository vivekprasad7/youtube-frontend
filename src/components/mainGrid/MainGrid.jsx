import React from 'react'
import ButtonsList from '../buttonsList/ButtonsList'
import VideoContainer from '../videoContainer/videoContainer'

const MainGrid = () => {
  return (
    <div className='col-span-11'>
        <ButtonsList/>
        <VideoContainer/>
        
    </div>
  )
}

export default MainGrid