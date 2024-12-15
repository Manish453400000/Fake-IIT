import React from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div className='bg-primary-dark test w-screen h-screen text-white flex justify-center items-center'>
      <Outlet />
    </div>
  )
}

export default Auth
