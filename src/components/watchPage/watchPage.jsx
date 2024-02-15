import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../utils/slices/appSlice'
import { useParams } from 'react-router-dom'

const WatchPage = () => {

    // const params = useParams()
    // console.log(params)

    // const [searchParams, useSearchParams] = useSearchParams()
    // const 


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(closeMenu())
    },[])
  return (
    <div>
    <h1>WatchPage</h1>

        
    </div>
  )
}

export default WatchPage