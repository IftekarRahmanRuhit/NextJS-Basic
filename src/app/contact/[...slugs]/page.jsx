import React from 'react'

export default async function SlugPages({params}) {
    const p = await params
    console.log(p)
  return (
    <div>
      Slug Pages
    </div>
  )
}
