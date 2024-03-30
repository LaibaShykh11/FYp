import React from 'react'
import { useState, useEffect } from 'react'
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi'
import MobileNav from './MobileNav'
import Nav from './Nav'
import { header } from '../LandingData'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { RiArrowRightSLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

function Header() {
  const [mobileNav, setMobileNav] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate()
  const { btnText1, btnText2 } = header
  const join = () => {
    navigate(`/Home`)
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })

  return (
    <header
      className={`${
        isActive ? 'lg:top-0 bg-purple shadow-2xl' : 'lg:top-[0px]'
      }  pt-1 bg-purple fixed w-full transition-all z-10`}
    >
      <div className='pl-6 pr-6 flex items-center'>
        <a href='#' data-aos='fade-down' data-aos-delay='1000'>
          <img className='h-[80px] ' src='codecollab.png' alt='logo' />
        </a>
        {/*nav - initially hidden - show on desktop mode */}
        <div
          className='hidden lg:flex items-center ms-auto'
          data-aos='fade-down'
          data-aos-delay='1200'
        >
          <Nav />
        </div>

        {/*cta button - initially hidden- show on desktop mode */}
        <div className='ms-auto pr-2'>
          <a href='/Home'>
            <button
              className='hover:animate-bounce rounded-full text-white lg:btn-sm bg-blue justify-center items-center hidden lg:flex '
              data-aos='fade-down'
              data-aos-delay='1400'
            >
              <AiOutlinePlusCircle className='mr-2' />
              {btnText1}
            </button>
          </a>
        </div>
        <div>
          <a href='/'>
            <button
              className='btn-sm btn btn-outline rounded-xl hidden lg:flex'
              data-aos='fade-down'
              data-aos-delay='1600'
            >
              {btnText2}
              <RiArrowRightSLine className='ml-2' />
            </button>
          </a>
        </div>
        <button className='lg:hidden' onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className='text-3xl  text-accent' />
          ) : (
            <HiMenuAlt4 className='text-3xl  text-accent' />
          )}
        </button>

        <div
          className={`${
            mobileNav ? 'left-0' : '-left-full'
          } fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}
        >
          <MobileNav />
        </div>
      </div>
      <div className='border-b-2 border-purple w-full pb-1'></div>
    </header>
  )
}

export default Header
