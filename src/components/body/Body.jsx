import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import MainGrid from '../mainGrid/MainGrid'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
        <Sidebar/>
        <MainGrid/>
    </div>
  )
}

export default Body