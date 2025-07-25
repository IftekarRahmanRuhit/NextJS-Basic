import React from 'react'

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent mb-4">
            Address Page
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find us at our convenient location. We're easily accessible and ready to serve you.
          </p>
        </div>

        {/* Main Address Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Address Information */}
          <div className="space-y-8">
            {/* Main Address Card */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-100/50">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Address</h2>
                  <div className="text-gray-600 space-y-1">
                    <p className="text-lg">123 Business Street</p>
                    <p className="text-lg">Suite 456</p>
                    <p className="text-lg">New York, NY 10001</p>
                    <p className="text-lg">United States</p>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3 mt-6">
                <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                  </svg>
                  <span>Get Directions</span>
                </button>
                <button className="px-6 py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-full hover:bg-amber-50 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  <span>Share Location</span>
                </button>
              </div>
            </div>

            {/* Additional Location Info */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Parking Info */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Parking</h3>
                </div>
                <p className="text-gray-600 text-sm">Free parking available in our building garage. Visitor spots on floors 2-3.</p>
              </div>

              {/* Accessibility */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Accessibility</h3>
                </div>
                <p className="text-gray-600 text-sm">Wheelchair accessible entrance and elevator. ADA compliant facilities available.</p>
              </div>
            </div>

            {/* Public Transport */}
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-2xl shadow-lg border border-amber-200/50">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Public Transportation
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Subway Station</span>
                  <span className="text-gray-800 font-medium">5 min walk</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Bus Stop</span>
                  <span className="text-gray-800 font-medium">2 min walk</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Taxi/Rideshare</span>
                  <span className="text-gray-800 font-medium">Available 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-100/50">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us Here</h2>
            
            {/* Map Container */}
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl h-80 flex items-center justify-center border-2 border-dashed border-amber-300/50 mb-6 relative overflow-hidden">
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-6 h-full">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className="border border-amber-400"></div>
                  ))}
                </div>
              </div>
              
              <div className="text-center z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Interactive Map</p>
                <p className="text-gray-500 text-sm">Click to view in Google Maps</p>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800 mb-3">Nearby Landmarks</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-gray-600">Central Park</span>
                  <span className="text-gray-500">- 10 min walk</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-gray-600">Times Square</span>
                  <span className="text-gray-500">- 15 min drive</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-gray-600">Grand Central</span>
                  <span className="text-gray-500">- 12 min drive</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Hours & Contact CTA */}
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-8 border border-amber-200/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Visit Us Today
              </h2>
              <p className="text-gray-600 mb-4">
                Our doors are open and our team is ready to welcome you. Drop by during business hours or schedule an appointment.
              </p>
              <div className="text-sm text-gray-600">
                <p><strong>Mon-Fri:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <div className="space-y-4">
                <button className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Schedule Visit
                </button>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
                  <button className="px-6 py-2 border-2 border-amber-500 text-amber-600 font-medium rounded-full hover:bg-amber-50 transition-all duration-300 text-sm">
                    Call Us
                  </button>
                  <button className="px-6 py-2 border-2 border-amber-500 text-amber-600 font-medium rounded-full hover:bg-amber-50 transition-all duration-300 text-sm">
                    Email Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}