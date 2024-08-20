import React from 'react'
import { Netflix_logo } from '../utils/constant'
function Header() {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
    <img src={Netflix_logo} className='w-40' alt='logo'></img>
    </div>
  )
}

export default Header
