import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <div>
      <div className='grid grid-cols-12'>

        {/* sidebar */}
        <div className='cols-span-3 bg-gray-200 h-screen text-black'>
            <ul>
                <li>User List</li>
            </ul>
        </div>

        {/* Dashboard content */}
        <div className='col-span-9 bg-white h-screen text-black'>
        {children}
        </div> 

      </div>
    </div>
  )
}
