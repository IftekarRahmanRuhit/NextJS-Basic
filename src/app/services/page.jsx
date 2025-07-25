import Link from 'next/link'
import React from 'react'

export default function page() {
  const data = [
    {
      _id: "1",
      serviceName: "Elite Home Cleaning",
      serviceImage: "https://via.placeholder.com/150?text=Home+Cleaning",
      serviceDescription: "Professional and eco-friendly home cleaning services to keep your space spotless."
    },
    {
      _id: "2",
      serviceName: "TechFix IT Solutions",
      serviceImage: "https://via.placeholder.com/150?text=IT+Support",
      serviceDescription: "Expert IT support and troubleshooting for home and office devices."
    },
    {
      _d: "3",
      serviceName: "FitFlex Personal Training",
      serviceImage: "https://via.placeholder.com/150?text=Personal+Training",
      serviceDescription: "One-on-one fitness coaching tailored to your goals, available at home or online."
    }
  ]
  return (
    <div>
      <p  className='text-2xl font-bold'>Services Page</p>
      {
        data.map((d)=>{
          return(
            <div>
              <Link href={`services/${d._id}`}>
              <p className='text-2xl mt-5'>serviceName : {d.serviceName}</p>
              <img src={d.serviceImage} alt="" />
              
              </Link>
            </div>

        )})
      }
    </div>
  )
}
