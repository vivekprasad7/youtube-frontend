import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import MainGrid from '../mainGrid/MainGrid'

const Body = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <MainGrid/>
    </div>
  )
}

export default Body