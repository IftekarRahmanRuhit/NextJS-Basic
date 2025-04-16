import React from 'react'

export default function ServiceDetailsPage({params}) {
    const id = params.id;
  return (
    <div>
      <h1 className='text-4xl text-white'>Service Details Page</h1>
      <p>Id:{id}</p>
    </div>
  )
}
