import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../../utils/slices/appSlice'
import { useDispatch } from 'react-redux'
import { YOUTUBE_SEARCH_API } from '../../utils/constants'

const Head = () => {
  const [ searchInput, setSearchInput] = useState("")
  const [ searchSuggestions, setSearchSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  useEffect(() => {
    // console.log(searchInput)

    // WE need to delay the API calls on every keypress
    // if difference between two keypresses is less than 200ms, decline the call

    const timer = setTimeout(() => getSearchSuggestions(), 200)

    // const handleScroll = () => {
    //   setShowSuggestions(false)
    // }
    // window.addEventListener('scroll', handleScroll)



    return () => {
      clearTimeout(timer)
      // window.removeEventListener('scroll', handleScroll)
    }
    

  }, [searchInput])

  const getSearchSuggestions = async () =>{
    const res = await fetch(YOUTUBE_SEARCH_API + searchInput)
    const json = await res.json()
    console.log(json[1])
    setSearchSuggestions(json[1])
  }

  const dispatch = useDispatch()
  const toggleMenuIcon = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className='flex justify-between items-center p-3 shadow-lg'>
        <div className='flex justify-between gap-4'>
            <img onClick={() => toggleMenuIcon()} className='h-8 cursor-pointer' src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" alt="menu-icon" />
            <img className='h-8' src="https://w1.pngwing.com/pngs/66/171/png-transparent-google-logo-youtube-youtuber-youtube-rewind-text-area-line.png" alt="youtube-icon" />
        </div>
        <div className='relative'>
          <div>

          <input className='border border-gray-400 rounded-l-full w-96 p-2 px-5' 
          type="text" 
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          onScroll={() => setShowSuggestions(false)}

          
          
          />
          <button className='border border-gray-400 rounded-r-full p-2 px-5'>Search</button>
          </div>

          {
            showSuggestions && 
            (<div className='fixed bg-white w-96 px-5 py-2 rounded-lg shadow-lg '>
            <ul className='py-1'>
              { 
                searchSuggestions?.map((item) => <li key={item} className='py-1 hover:bg-gray-50 px-2 cursor-pointer'>{item}</li>
                )
              }
            
            </ul>
          </div>)
          }

          
      
        </div>
        <div className='pr-5' >
          <img className='h-8' src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png" alt="user" />
        </div>
    </div>
  )
}

export default Head