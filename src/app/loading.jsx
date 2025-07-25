import React from 'react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent">
            Loading....
          </h2>
          
          {/* Animated Dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-64 mx-auto">
            <div className="w-full bg-amber-100 rounded-full h-2 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Loading Message */}
          <p className="text-gray-600 animate-pulse">
            Please wait while we prepare your content...
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="relative">
          {/* Floating Particles */}
          <div className="absolute -top-8 -left-8 w-2 h-2 bg-amber-400 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute -top-12 left-12 w-1 h-1 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute -top-6 left-24 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute -top-10 -right-8 w-1 h-1 bg-orange-500 rounded-full animate-ping" style={{animationDelay: '0.9s'}}></div>
          <div className="absolute -top-4 -right-16 w-2 h-2 bg-amber-400 rounded-full animate-ping" style={{animationDelay: '1.1s'}}></div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-amber-100/20 to-orange-100/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.2s'}}></div>
        <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-gradient-to-tl from-orange-100/20 to-amber-100/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.4s'}}></div>
      </div>
    </div>
  )
}