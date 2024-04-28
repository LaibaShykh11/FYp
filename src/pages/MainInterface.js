import React from 'react'
import { features } from '../LandingData'

function MainInterface() {
  const { mainInterface } = features
  const { title, subtitle, image } = mainInterface

  return (
    <section className='section'>
      <div className='flex lg:flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 items-center justify-center '>
        <h1 className='title text-center'>{title}</h1>
        <p className='text-1xl text-light font-sans flex text-center mb-6'>
          {subtitle}
        </p>
      </div>
      <div
        className='flex justify-center'
        data-aos='fade-left'
        data-aos-offset='300'
      >
        <img className='h-[30rem] rounded-lg shadow-md' src={image} alt='' />
      </div>
    </section>
  )
}

export default MainInterface
