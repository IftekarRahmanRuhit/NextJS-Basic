// import Link from 'next/link'
// import React from 'react'

// export default function page() {
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
//       _d: "3",
//       serviceName: "FitFlex Personal Training",
//       serviceImage: "https://via.placeholder.com/150?text=Personal+Training",
//       serviceDescription: "One-on-one fitness coaching tailored to your goals, available at home or online."
//     }
//   ]
//   return (
//     <div>
//       <p  className='text-2xl font-bold'>Services Page</p>
//       {
//         data.map((d)=>{
//           return(
//             <div>
//               <Link href={`services/${d._id}`}>
//               <p className='text-2xl mt-5'>serviceName : {d.serviceName}</p>
//               <img src={d.serviceImage} alt="" />
              
//               </Link>
//             </div>

//         )})
//       }
//     </div>
//   )
// }




import Link from 'next/link'
import React from 'react'

export default function page() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent mb-4">
            Services Page
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium services designed to enhance your lifestyle and meet your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            data.map((d) => {
              return (
                <Link href={`services/${d._id}`} key={d._id} className="group">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-amber-100/50 overflow-hidden group-hover:border-amber-200">
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={d.serviceImage} 
                        alt={d.serviceName}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content Container */}
                    <div className="p-6 space-y-4">
                      {/* Service Name */}
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
                        {d.serviceName}
                      </h3>

                      {/* Service Description */}
                      <p className="text-gray-600 leading-relaxed line-clamp-3">
                        {d.serviceDescription}
                      </p>

                      {/* Call to Action */}
                      <div className="pt-4">
                        <div className="inline-flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-colors duration-300">
                          Learn More
                          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-300/50 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
                  </div>
                </Link>
              )
            })
          }
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-8 border border-amber-200/30">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Can't find what you're looking for? We offer personalized services tailored to your specific requirements.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}