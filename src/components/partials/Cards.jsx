import React from 'react'
import Card from './Card'

let a = [1, 2, 3, 4]

const Cards = () => {
  return (
    <div className='px-40 flex items-center mt-14 gap-6'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Cards