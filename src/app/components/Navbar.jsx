"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { use } from 'react'

export default function Navbar() {
  const pathName = usePathname()

  if(!pathName.includes('dashboard'))
  {
return (
    <div className='w-11/12 mx-auto'>
      <nav className='bg-amber-100 text-black' >
        <ul className='flex justify-center items-center text-center gap-3 mt-3 ' >

        <Link href="/">
        <li>Home</li>
        </Link>
        <Link href="/services">
        <li>Services</li>
        </Link>
        <Link href="/contact">
        <li>Contact</li>
        </Link>
        
        </ul>
      </nav>
    </div>
  )
  }
  else{
    return <> </>
  }
  
}
