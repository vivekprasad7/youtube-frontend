import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../sidebar/Sidebar'
import ResultChannelCard from './ResultChannelCard'
import ResultVideoCard from './ResultVideoCard'
import { Link } from 'react-router-dom'

const Results = () => {


    const videoResults = useSelector((store) => store.results.videoResults)

    console.log("videoResults", videoResults)

  return (
    <div className='grid grid-flow-col'>
    <Sidebar/>
    <div>
      {
        videoResults.map((item) => {

          if ( item.id.kind === "youtube#channel") {
            return(
              <ResultChannelCard data={item} />
            ) 
          } else {
            return (
              <Link  key={item?.id?.videoId} to={"/watch?v=" + item?.id?.videoId} >

                <ResultVideoCard data={item}/>
              </Link>
            )
          }
          


        })
      }
    </div>
</div>
  )
}

export default Results