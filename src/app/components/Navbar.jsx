"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function Navbar() {
  const pathName = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  if (!pathName.includes('dashboard')) {
    return (
      <div className=''>
        <nav className='bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 text-gray-800 shadow-lg  border border-amber-200/50 backdrop-blur-sm '>
          {/* Desktop Navigation */}
          <ul className='hidden md:flex justify-center items-center text-center gap-8 py-4'>
            <Link href="/">
              <li className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-amber-200/70 hover:text-amber-900 hover:scale-105 hover:shadow-md cursor-pointer active:scale-95 ${
                pathName === '/' ? 'bg-amber-200/80 text-amber-900 shadow-md' : ''
              }`}>
                Home
              </li>
            </Link>
            <Link href="/services">
              <li className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-amber-200/70 hover:text-amber-900 hover:scale-105 hover:shadow-md cursor-pointer active:scale-95 ${
                pathName === '/services' ? 'bg-amber-200/80 text-amber-900 shadow-md' : ''
              }`}>
                Services
              </li>
            </Link>
            <Link href="/contact">
              <li className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-amber-200/70 hover:text-amber-900 hover:scale-105 hover:shadow-md cursor-pointer active:scale-95 ${
                pathName === '/contact' ? 'bg-amber-200/80 text-amber-900 shadow-md' : ''
              }`}>
                Contact
              </li>
            </Link>


              <Link href="/posts">
              <li className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-amber-200/70 hover:text-amber-900 hover:scale-105 hover:shadow-md cursor-pointer active:scale-95 ${
                pathName === '/posts' ? 'bg-amber-200/80 text-amber-900 shadow-md' : ''
              }`}>
                Posts
              </li>
            </Link>
          </ul>

          {/* Mobile Navigation */}
          <div className='md:hidden'>
            {/* Mobile Header */}
            <div className='flex justify-between items-center px-4 py-3'>
              <div className='text-lg font-semibold text-amber-900'>Menu</div>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='p-2 rounded-lg hover:bg-amber-200/50 transition-colors duration-200'
                aria-label='Toggle menu'
              >
                <div className='space-y-1.5'>
                  <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                  <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </div>
              </button>
            </div>

            {/* Mobile Menu Items */}
            <ul className={`overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className='px-4 pb-3 space-y-2'>
                <Link href="/">
                  <li className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-amber-200/70 hover:text-amber-900 cursor-pointer active:bg-amber-300/50 ${
                    pathName === '/' ? 'bg-amber-200/80 text-amber-900' : ''
                  }`}>
                    Home
                  </li>
                </Link>
                <Link href="/services">
                  <li className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-amber-200/70 hover:text-amber-900 cursor-pointer active:bg-amber-300/50 ${
                    pathName === '/services' ? 'bg-amber-200/80 text-amber-900' : ''
                  }`}>
                    Services
                  </li>
                </Link>
                <Link href="/contact">
                  <li className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-amber-200/70 hover:text-amber-900 cursor-pointer active:bg-amber-300/50 ${
                    pathName === '/contact' ? 'bg-amber-200/80 text-amber-900' : ''
                  }`}>
                    Contact
                  </li>
                </Link>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
  else {
    return <></>
  }
}