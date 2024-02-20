import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  // if(!isMenuOpen) return null


  return (
    <div className={isMenuOpen ? "p-5 shadow-lg w-48" : "hidden"}>
       <ul className='pt-2'>
        <li>
          <Link  className='flex' to="/">
            <img className="pr-2" src="./home.svg" alt="" /> Home
          </Link>
          </li>
          <li className='flex py-2 items-center'>
            <img className="pr-2 " src="./shorts.svg" alt="" /> Shorts
          </li>
          <li className='flex pb-2 items-center'>
            <img className="pr-2" src="./subscriptions.svg" alt="" /> Subscriptions
          </li>
       
      </ul>
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
      
          <li className='flex py-2 items-center'>
            <img className="pr-2 " src="./trending.svg" alt="" /> Trending
          </li>
          <li className='flex pb-2 items-center'>
            <img className="pr-2" src="./shopping.svg" alt="" /> Shopping
          </li>
          <li className='flex pb-2 items-center'>
            <img className="pr-2" src="./music.svg" alt="" /> Music
          </li>
          <li className='flex pb-2 items-center'>
            <img className="pr-2" src="./movies.svg" alt="" /> Movies
          </li>
          <li className='flex pb-2 items-center'>
            <img className="pr-2" src="./live.svg" alt="" /> Live
          </li>
          <li className='flex pb-2 items-center'>
            <img className="pr-2" src="./gaming.svg" alt="" /> Gaming
          </li>
          <li className='flex pb-2 items-center'>
            <img className="pr-2" src="./news.svg" alt="" /> News
          </li>
          <li className='flex pb-2 items-center'>
            <img className="pr-2" src="./sports.svg" alt="" /> Sports
          </li>
          <li className='flex pb-2 items-center'>
            <img className="pr-2" src="./learning.svg" alt="" /> Learning
          </li>
          <li className='flex pb-6 items-center'>
            <img className="pr-2" src="./podcasts.svg" alt="" /> Podcasts
          </li>

          <h1 className="font-bold pt-5 pb-2 border-t border-gray-300">More from YouTube</h1>          
          <ul className="text-sm">
        <li className="py-2 cursor-pointer">
          <Link className="flex items-center " to="/">
            <img className="pr-4 w-10" src="./premium.svg" alt="gaming" /> YouTube Premium
          </Link>
        </li>
        <li className="py-2 cursor-pointer">
          <Link className="flex items-center " to="/">
            <img className="pr-4 w-10" src="./ymusic.svg" alt="gaming" /> YouTube Music
          </Link>
        </li>
        <li className="py-2 cursor-pointer">
          <Link className="flex items-center " to="/">
            <img className="pr-4 w-10" src="./ykids.svg" alt="gaming" /> YouTube Kids
          </Link>
        </li>
      </ul>
        
      </ul>
     
    </div>
  )
}

export default Sidebar