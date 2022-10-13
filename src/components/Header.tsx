import React from 'react'
import { Logo } from './Logo'

function Header() {
  return (
    <header className='w-full py-1 flex items-center justify-center bg-gray-700  border-b border-gray-600'>
        <Logo/>
    </header>
  )
}

export default Header