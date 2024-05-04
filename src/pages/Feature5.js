import React from 'react'
import { features } from '../LandingData'

function Feature5() {
  const { feature5 } = features
  const { title, subtitle, image } = feature5

  return (
    <section className='section flex flex-col lg:flex-row p-36 justify-evenly'>
      <div className='flex' data-aos='fade-right' data-aos-offset='300'>
        <img className='h-[30rem]' src={image} alt='' />
      </div>
      <div className='flex lg:flex-col gap-y-8 lg:gap-y-0  pl-6 item-center'>
        <h1 className='title'>{title}</h1>
        <p className='text-1xl text-light font-sans flex'>{subtitle}</p>
      </div>
    </section>
  )
}

export default Feature5
