import React, { useEffect } from 'react'
import { hero } from '../LandingData'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    })
  }, [])

  useEffect(() => {
    AOS.refresh()
  })

  const { title, subtitle, btnText, compText } = hero
  return (
    <section className='bg-white min-h-[900px] py-12'>
      <div className='container font-sans mx-auto min-h-[700px] flex justify-center items-center'>
        <div className='flex lg:flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 items-center justify-center text-center'>
          <div className='flex-1 '>
            <h1
              className='title mb-2 lg:mb-5'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              {title}
            </h1>
            <p
              className='text-md text-light font-sans pl-52 pr-52 lg:mb-10'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              {subtitle}
            </p>
          </div>

          <div
            className='flex flex-col items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6'
            data-aos='fade-down'
            data-aos-delay='700'
          >
            <button
              className='hover:animate-bounce rounded-full text-white lg:btn-md bg-blue flex justify-center items-center mb-2 '
              data-aos='fade-up'
              data-aos-delay='800'
            >
              <AiOutlinePlusCircle className='mr-2' />
              {btnText}
            </button>
            <span className='lg:lead font-sans text-light mt-3 lg:mb-0'>
              {compText}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
