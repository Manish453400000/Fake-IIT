import React from 'react'
import bg from '../assets/bg-1.jpeg'

const Register = () => {
  return (
    <div className='w-[50vw] max-w-[50em] relative min-h-[30em] rounded-[15px] bg-[#4b4b4a]'>
      <div className=' overflow-hidden w-full test h-[50%] absolute'>
        <img src={bg} alt="" className=' object-contain h-[50%] opacity-[0.6]' />
      </div>
    </div>
  )
}

export default Register
