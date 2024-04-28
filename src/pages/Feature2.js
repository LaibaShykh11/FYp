import React from 'react'
import { features } from '../LandingData'

function Feature2() {
  const { feature2 } = features
  const { title, subtitle, image } = feature2

  return (
    <section className='section flex flex-col lg:flex-row item-center justify-evenly p-28'>
      <div className='flex lg:flex-col lg:gap-x-[10px] gap-y-8 lg:gap-y-0  pl-6'>
        <h1 className='title pl-6'>{title}</h1>
        <p className='text-1xl text-light font-sans flex'>{subtitle}</p>
      </div>
      <div
        className='flex justify-center pl-32'
        data-aos='fade-left'
        data-aos-offset='300'
      >
        <img className='h-[20rem] rounded-lg shadow-md' src={image} alt='' />
      </div>
    </section>
  )
}

export default Feature2
