import React from 'react'

export default function ServiceDetailsPage({params}) {
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
      _id: "3",
      serviceName: "FitFlex Personal Training",
      serviceImage: "https://via.placeholder.com/150?text=Personal+Training",
      serviceDescription: "One-on-one fitness coaching tailored to your goals, available at home or online."
    }
  ]
    const id = params?.id;
    const singleData = data.find(d => d._id == id)
  return (
    <div>
      <h1 className='text-4xl text-white'>Service Details Page</h1>
      <p className='mt-5'>serviceName:{singleData.serviceName}</p>
      <p>serviceDescription : {singleData.serviceDescription}</p>
      <p>Id:{id}</p>
    </div>
  )
}
