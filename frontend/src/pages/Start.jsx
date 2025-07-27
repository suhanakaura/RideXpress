import React from 'react'
import img from '../assets/main.svg'
import { Link } from 'react-router-dom'
const Start = () => {
  return (
    <div>
      <div className='h-screen pt-8 flex justify-between flex-col w-full bg-violet-200'>
        <h1 className='ml-8 text-2xl'>HOME</h1>
        <img src={img} alt="" />
        <div className='bg-white py-4 px-4 pb-7 flex flex-col gap-4'>
            <h2 className='text-3xl font-bold'>Get started with ride</h2>
            <Link to='/user-login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
