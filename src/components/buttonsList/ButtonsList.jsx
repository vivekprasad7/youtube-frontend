import React from 'react'
import Button from './Button'

const ButtonsList = () => {

  const list = ["All", "ReactJS", "NextJS", "Cricket", "Football", "Hinduism"]

  return (
    <div className='flex gap-2'>

      {
        list.map((item) => <Button name={item}/>)
      }
 

    </div>
  )
}

export default ButtonsList