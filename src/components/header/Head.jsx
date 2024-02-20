import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../../utils/slices/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_VIDEOS } from '../../utils/constants'
import { cacheResults } from '../../utils/slices/searchSlice'
import { Link, useNavigate } from 'react-router-dom'
import { getVideoResults, setSearchQuery } from '../../utils/slices/resultsSlice'

const Head = () => {

  const navigate = useNavigate()

  const [searchInput, setSearchInput] = useState("")
  const [searchSuggestions, setSearchSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  console.log("Search Query", searchQuery)

  const dispatch = useDispatch()

  const searchCache = useSelector((store) => store.search)

  useEffect(() => {
    // console.log(searchInput)

    // WE need to delay the API calls on every keypress
    // if difference between two keypresses is less than 200ms, decline the call

    const timer = setTimeout(() => {

      if (searchCache[searchInput]) {
        setSearchSuggestions(searchCache[searchInput])
      } else {
        getSearchSuggestions()
      }

    }, 200)


    return () => {
      clearTimeout(timer)
    }

  }, [searchInput])

  const getSearchSuggestions = async () => {
    const res = await fetch(YOUTUBE_SEARCH_API + searchInput)
    const json = await res.json()
    console.log("SEARCH API CALL MADE", json[1])

    dispatch(cacheResults(
      {
        [searchInput]: json[1]
      }
    ))

    setSearchSuggestions(json[1])
  }


  const getVideosFromSearch = async () => {
    console.log("searchQuery", searchInput)
    const res = await fetch(YOUTUBE_SEARCH_VIDEOS + searchInput)
    const json = await res.json()
    console.log("search results", json.items)
    dispatch(getVideoResults(json.items))
    navigate("/results")

  }

  // const handleSearch = async (searchInput) => {
  //   console.log("hqndleSearch called")

  //   const res = await fetch(YOUTUBE_SEARCH_VIDEOS + searchInput)
  //   const json = await res.json()
  //   console.log("search input results", json.items)
  //   dispatch(getVideoResults(json.items))
  // }


  const handleSuggestionClick = async (e, suggestion) => {
    e.stopPropagation()
    console.log("handleSuggestionClick Called", suggestion)
    setSearchInput(suggestion)
    const res = await fetch(YOUTUBE_SEARCH_VIDEOS + searchInput)
    const json = await res.json()
    console.log("search results", json.items)
    dispatch(getVideoResults(json.items))
    navigate("/results")
    setShowSuggestions(false)
  }

  window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercentage >= 5) {
        setShowSuggestions(false)
    }
});


  const toggleMenuIcon = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className='flex justify-between items-center p-3 shadow-lg'>
      <div className='flex justify-between gap-4'>
        <img onClick={() => toggleMenuIcon()} className='h-8 cursor-pointer' src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" alt="menu-icon" />
        <img onClick={() => navigate("/")}className='h-8 cursor-pointer' src="./youtube.svg" alt="youtube-icon" />
      </div>
      <div className='relative'>
        <div>

          <input className='border border-gray-400 rounded-l-full w-96 p-2 px-5'
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
          // onBlur={toggleFalse}
          // onScroll={toggleFalse}
          />
          <button onClick={() => getVideosFromSearch()} className='border border-gray-400 rounded-r-full p-2 px-5'>Search</button>
        </div>

        {
          searchInput!== "" && showSuggestions &&
          (<div className='fixed bg-white w-96 px-5 py-2 rounded-lg shadow-lg z-20 '>
            <ul className='py-1'>
              {
                searchSuggestions?.map((item, index) => {

                  // console.log(index, typeof item)
                  return (
                    <li onClick={(e) => { handleSuggestionClick(e, item); setSearchQuery(item) }} key={index} className='hover:bg-gray-50 px-5 py-1 cursor-pointer'>

                      {item}


                    </li>
                  )
                }
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





