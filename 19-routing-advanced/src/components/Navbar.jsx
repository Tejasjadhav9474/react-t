import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-8 bg-cyan-800 '>
        <h2 className='text-2xl font-bold'>Raj</h2>
        <div className='flex gap-10 '>
          <Link className='text-lg font-medium' to='/'>Home</Link>
          <Link className='text-lg font-medium' to='/about'>About</Link>
          <Link className='text-lg font-medium' to='/product'>Product</Link>
          <Link className='text=lg font-medium' to='Course'>Courses</Link>
           
        </div>
    </div>
  )
}

export default Navbar