import React from 'react'

const Head = () => {
  return (
    <div className='flex justify-between items-center p-3 shadow-lg'>
        <div className='flex justify-between gap-4'>
            <img className='h-8' src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" alt="menu-icon" />
            <img className='h-8' src="https://w1.pngwing.com/pngs/66/171/png-transparent-google-logo-youtube-youtuber-youtube-rewind-text-area-line.png" alt="youtube-icon" />
        </div>
        <div className='border border-black rounded-full  overflow-hidden'>
          <input className='w-80 px-3 outline-none' type="text" />
          <button className='border border-gray-400 p-1 px-3 bg-red'>Search</button>
        </div>
        <div className='pr-5' >
          <img className='h-8' src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png" alt="user" />
        </div>
    </div>
  )
}

export default Head