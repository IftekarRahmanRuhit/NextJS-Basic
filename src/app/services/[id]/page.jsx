// import React from 'react'

// export default function ServiceDetailsPage({params}) {
//   const data = [
//     {
//       _id: "1",
//       serviceName: "Elite Home Cleaning",
//       serviceImage: "https://via.placeholder.com/150?text=Home+Cleaning",
//       serviceDescription: "Professional and eco-friendly home cleaning services to keep your space spotless."
//     },
//     {
//       _id: "2",
//       serviceName: "TechFix IT Solutions",
//       serviceImage: "https://via.placeholder.com/150?text=IT+Support",
//       serviceDescription: "Expert IT support and troubleshooting for home and office devices."
//     },
//     {
//       _id: "3",
//       serviceName: "FitFlex Personal Training",
//       serviceImage: "https://via.placeholder.com/150?text=Personal+Training",
//       serviceDescription: "One-on-one fitness coaching tailored to your goals, available at home or online."
//     }
//   ]
//     const id = params?.id;
//     const singleData = data.find(d => d._id == id)
//     if(singleData)
//     { return (
//     <div>
//       <h1 className='text-4xl text-white'>Service Details Page</h1>
//       <p className='mt-5'>serviceName:{singleData.serviceName}</p>
//       <p>serviceDescription : {singleData.serviceDescription}</p>
//       <p>Id:{id}</p>
//     </div>
//   )}
//   else{
//   return  <>
//     <p> NOT FOUND </p>
//     </>
//   }
 
// }




import React from 'react'

export default function ServiceDetailsPage({params}) {
  const data = [
    {
      _id: "1",
      serviceName: "Elite Home Cleaning",
      serviceImage: "https://5.imimg.com/data5/SELLER/Default/2024/6/431009190/CR/JZ/FB/37108416/professional-house-cleaning-services.jpg",
      serviceDescription: "Professional and eco-friendly home cleaning services to keep your space spotless."
    },
    {
      _id: "2",
      serviceName: "TechFix IT Solutions",
      serviceImage: "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041859.jpg",
      serviceDescription: "Expert IT support and troubleshooting for home and office devices."
    },
    {
      _id: "3",
      serviceName: "FitFlex Personal Training",
      serviceImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGdqL_E-Pm6U_F1I4ajViYSCI94v8xi6Rtg&s",
      serviceDescription: "One-on-one fitness coaching tailored to your goals, available at home or online."
    }
  ]
  
  const id = params?.id;
  const singleData = data.find(d => d._id == id)
  
  if(singleData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent mb-4">
              Service Details Page
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-amber-100/50 overflow-hidden">
            {/* Hero Image Section */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img 
                src={singleData.serviceImage} 
                alt={singleData.serviceName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-amber-500/90 text-white text-sm font-medium rounded-full mb-2">
                  Service ID: {id}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12 space-y-8">
              {/* Service Name */}
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                  {singleData.serviceName}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
              </div>

              {/* Service Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">About This Service</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {singleData.serviceDescription}
                </p>
              </div>

              {/* Additional Info Cards */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200/50">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">★</span>
                    </div>
                    <h4 className="font-semibold text-gray-800">Premium Quality</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    We deliver exceptional service quality that exceeds your expectations every time.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200/50">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">24/7</span>
                    </div>
                    <h4 className="font-semibold text-gray-800">Available Anytime</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Our team is ready to assist you whenever you need our professional services.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="flex-1 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Book This Service
                </button>
                <button className="flex-1 px-8 py-4 border-2 border-amber-500 text-amber-600 font-semibold rounded-full hover:bg-amber-50 transform hover:scale-105 transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </div>
          </div>


        </div>
      </div>
    )
  }
  else {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center">
        <div className="text-center space-y-6 p-12">
          {/* 404 Icon */}
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center mb-8">
            <span className="text-4xl text-white">!</span>
          </div>
          
          {/* Error Message */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Service Not Found
            </h1>
            <p className="text-xl text-gray-600 max-w-md mx-auto">
              Sorry, we couldn't find the service you're looking for. It may have been moved or doesn't exist.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button 
              onClick={() => window.history.back()}
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Go Back
            </button>
            <button 
              onClick={() => window.location.href = '/services'}
              className="px-8 py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-full hover:bg-amber-50 transform hover:scale-105 transition-all duration-300"
            >
              View All Services
            </button>
          </div>
        </div>
      </div>
    )
  }
}