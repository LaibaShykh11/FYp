import React from 'react'
import { features } from '../LandingData'

function Feature3() {
  const { feature3 } = features
  const { title, subtitle, image } = feature3

  return (
    <section className='section flex flex-col lg:flex-row item-center justify-evenly p-28'>
      <div
        className='flex-1  pl-36'
        data-aos='fade-right'
        data-aos-offset='300'
      >
        <img className='h-[20rem]' src={image} alt='' />
      </div>
      <div className='flex lg:flex-col gap-y-8 lg:gap-y-0  pl-6 item-center'>
        <h1 className='title'>{title}</h1>
        <p className='text-1xl text-light font-sans flex'>{subtitle}</p>
      </div>
    </section>
  )
}

export default Feature3
