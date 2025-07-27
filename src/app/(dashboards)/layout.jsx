import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className='grid grid-cols-12 min-h-screen'>

        {/* Sidebar */}
        <div className='col-span-3 bg-gradient-to-b from-amber-600 via-amber-700 to-orange-700 h-screen text-white shadow-2xl'>
          {/* Logo/Brand Section */}
          <div className="p-6 border-b border-amber-500/30">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-300 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h1 className="font-bold text-lg">Dashboard</h1>
                <p className="text-amber-200 text-xs">Admin Panel</p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="p-4">
            <nav className="space-y-2">
              {/* Main Menu Items */}
              <div className="mb-6">
                <p className="text-amber-200 text-xs font-semibold uppercase tracking-wider mb-3 px-3">
                  Main Menu
                </p>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg bg-amber-500/20 text-white border-l-4 border-amber-300 transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 6.292 9.966 9.966 0 000 1.708 4 4 0 110 6.292 9.966 9.966 0 000-1.708zm-6 2.292a1 1 0 011-1h4a1 1 0 010 2H7a1 1 0 01-1-1zm6 7a1 1 0 011-1h4a1 1 0 010 2h-4a1 1 0 01-1-1z" />
                      </svg>
                      <span className="font-medium">User List</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg text-amber-100 hover:bg-amber-500/20 hover:text-white transition-all duration-300 group">
                      <svg className="w-5 h-5 group-hover:text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span>Analytics</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg text-amber-100 hover:bg-amber-500/20 hover:text-white transition-all duration-300 group">
                      <svg className="w-5 h-5 group-hover:text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span>Projects</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg text-amber-100 hover:bg-amber-500/20 hover:text-white transition-all duration-300 group">
                      <svg className="w-5 h-5 group-hover:text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h8a2 2 0 012 2v4m0 0V3a2 2 0 00-2-2H6a2 2 0 00-2 2v4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0H4" />
                      </svg>
                      <span>Tasks</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Management Section */}
              <div className="mb-6">
                <p className="text-amber-200 text-xs font-semibold uppercase tracking-wider mb-3 px-3">
                  Management
                </p>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg text-amber-100 hover:bg-amber-500/20 hover:text-white transition-all duration-300 group">
                      <svg className="w-5 h-5 group-hover:text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Settings</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg text-amber-100 hover:bg-amber-500/20 hover:text-white transition-all duration-300 group">
                      <svg className="w-5 h-5 group-hover:text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Security</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* User Profile Section */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-amber-500/30 bg-gradient-to-r from-amber-800/50 to-orange-800/50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">Admin User</p>
                <p className="text-amber-200 text-xs">admin@company.com</p>
              </div>
              <button className="text-amber-300 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className='col-span-9 bg-white/80 backdrop-blur-sm h-screen text-black overflow-y-auto'>
          {/* Top Header */}
          <div className="bg-white/90 backdrop-blur-sm border-b border-amber-100 p-6 shadow-sm sticky top-0 z-10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Welcome Back
                </h2>
                <p className="text-gray-600 mt-1">Here's what's happening with your dashboard today.</p>
              </div>
              
              {/* Header Actions */}
              <div className="flex items-center space-x-4">
                {/* Search */}
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
                  />
                  <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                {/* Notifications */}
                <button className="relative p-2 text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5-5 5-5H9l11 5z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
                </button>

                {/* Profile Menu */}
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-amber-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Total Users</p>
                    <p className="text-2xl font-bold text-gray-800">1,234</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 6.292 9.966 9.966 0 000 1.708 4 4 0 110 6.292 9.966 9.966 0 000-1.708zm-6 2.292a1 1 0 011-1h4a1 1 0 010 2H7a1 1 0 01-1-1zm6 7a1 1 0 011-1h4a1 1 0 010 2h-4a1 1 0 01-1-1z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-amber-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Active Projects</p>
                    <p className="text-2xl font-bold text-gray-800">56</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-amber-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Revenue</p>
                    <p className="text-2xl font-bold text-gray-800">$12,345</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-amber-100/50 p-6">
              {children}
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}