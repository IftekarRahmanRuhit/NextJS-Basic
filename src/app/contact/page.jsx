"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
// using router hooks for navigation 
  const router = useRouter()
  const isLoggedIn = true;

  const handleNavigation = ()=> {
    if(isLoggedIn){
      router.push("/contact/address")
    }
    else{
      router.push("/")
    }
  }

  return (
    // using router hooks for navigation 
    
    <div>
      <p  className='text-2xl font-bold'>Contact Page</p>

      <div>
        <button onClick={handleNavigation} type='button' className='btn bg-amber-800 text-white'>Address page</button>
      </div>

    </div>
  )
}
