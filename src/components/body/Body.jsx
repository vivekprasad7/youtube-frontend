import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import MainGrid from '../mainGrid/MainGrid'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body