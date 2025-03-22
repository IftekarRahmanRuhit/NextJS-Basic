import React from 'react'

export default function Navbar() {
  return (
    <div className='w-11/12 mx-auto'>
      <nav className='bg-amber-100 text-black' >
        <ul className='flex justify-center items-center text-center gap-3 mt-3 ' >
        <li>Home</li>
        <li>Services</li>
        <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}
