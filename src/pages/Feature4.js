import React from 'react'
import { features } from '../LandingData'

function Feature4() {
  const { feature4 } = features
  const { title, subtitle, image } = feature4

  return (
    <section className='section flex flex-col lg:flex-row item-center justify-evenly p-32'>
      <div className='flex lg:flex-col lg:gap-x-[10px] gap-y-8 lg:gap-y-0  pl-6 items-center '>
        <h1 className='title '>{title}</h1>
        <p className='text-1xl text-light font-sans flex'>{subtitle}</p>
      </div>
      <div
        className='flex justify-center pl-32'
        data-aos='fade-left'
        data-aos-offset='300'
      >
        <img className='h-[30rem]' src={image} alt='' />
      </div>
    </section>
  )
}

export default Feature4
