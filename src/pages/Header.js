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

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })

  return (
    <header
      className={`${
        isActive ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[0px]'
      }  pt-1 bg-white fixed w-full transition-all z-10 relative py-4`}
    >
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 left-0 w-full z-0">
        <path fill="#3d2352" fillOpacity="1" d="M0,96L21.8,117.3C43.6,139,87,181,131,176C174.5,171,218,117,262,96C305.5,75,349,85,393,128C436.4,171,480,245,524,266.7C567.3,288,611,256,655,245.3C698.2,235,742,245,785,234.7C829.1,224,873,192,916,197.3C960,203,1004,245,1047,224C1090.9,203,1135,117,1178,90.7C1221.8,64,1265,96,1309,128C1352.7,160,1396,192,1418,208L1440,224L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
      </svg> */}

      <svg
        id='wave'
        style={{ transform: 'rotate(180deg)', transition: '0.3s' }}
        viewBox='0 0 1440 240'
        className='absolute top-0 left-0 w-full z-0'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient id='sw-gradient-0' x1='0' x2='0' y1='1' y2='0'>
            <stop
              stop-color='rgba(92.564, 26.918, 106.606, 0.71)'
              offset='20%'
            ></stop>
            <stop stop-color='rgba(122, 32, 72, 1)' offset='100%'></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: 'translate(0, 0px)', opacity: 1 }}
          fill='url(#sw-gradient-0)'
          d='M0,120L40,124C80,128,160,136,240,124C320,112,400,80,480,64C560,48,640,48,720,72C800,96,880,144,960,144C1040,144,1120,96,1200,100C1280,104,1360,160,1440,160C1520,160,1600,104,1680,88C1760,72,1840,96,1920,96C2000,96,2080,72,2160,52C2240,32,2320,16,2400,40C2480,64,2560,128,2640,144C2720,160,2800,128,2880,124C2960,120,3040,144,3120,160C3200,176,3280,184,3360,192C3440,200,3520,208,3600,184C3680,160,3760,104,3840,68C3920,32,4000,16,4080,44C4160,72,4240,144,4320,180C4400,216,4480,216,4560,216C4640,216,4720,216,4800,196C4880,176,4960,136,5040,112C5120,88,5200,80,5280,80C5360,80,5440,88,5520,100C5600,112,5680,128,5720,136L5760,144L5760,240L5720,240C5680,240,5600,240,5520,240C5440,240,5360,240,5280,240C5200,240,5120,240,5040,240C4960,240,4880,240,4800,240C4720,240,4640,240,4560,240C4480,240,4400,240,4320,240C4240,240,4160,240,4080,240C4000,240,3920,240,3840,240C3760,240,3680,240,3600,240C3520,240,3440,240,3360,240C3280,240,3200,240,3120,240C3040,240,2960,240,2880,240C2800,240,2720,240,2640,240C2560,240,2480,240,2400,240C2320,240,2240,240,2160,240C2080,240,2000,240,1920,240C1840,240,1760,240,1680,240C1600,240,1520,240,1440,240C1360,240,1280,240,1200,240C1120,240,1040,240,960,240C880,240,800,240,720,240C640,240,560,240,480,240C400,240,320,240,240,240C160,240,80,240,40,240L0,240Z'
        ></path>
        <defs>
          <linearGradient id='sw-gradient-1' x1='0' x2='0' y1='1' y2='0'>
            <stop
              stop-color='rgba(75.476, 48.481, 111.918, 1)'
              offset='0%'
            ></stop>
            <stop
              stop-color='rgba(97.499, 24.068, 56.704, 0.89)'
              offset='100%'
            ></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: 'translate(0, 50px)', opacity: 0.9 }}
          fill='url(#sw-gradient-1)'
          d='M0,72L40,64C80,56,160,40,240,36C320,32,400,40,480,52C560,64,640,80,720,76C800,72,880,48,960,60C1040,72,1120,120,1200,136C1280,152,1360,136,1440,112C1520,88,1600,56,1680,40C1760,24,1840,24,1920,48C2000,72,2080,120,2160,144C2240,168,2320,168,2400,168C2480,168,2560,168,2640,152C2720,136,2800,104,2880,108C2960,112,3040,152,3120,168C3200,184,3280,176,3360,144C3440,112,3520,56,3600,32C3680,8,3760,16,3840,32C3920,48,4000,72,4080,68C4160,64,4240,32,4320,16C4400,0,4480,0,4560,20C4640,40,4720,80,4800,116C4880,152,4960,184,5040,164C5120,144,5200,72,5280,64C5360,56,5440,112,5520,124C5600,136,5680,104,5720,88L5760,72L5760,240L5720,240C5680,240,5600,240,5520,240C5440,240,5360,240,5280,240C5200,240,5120,240,5040,240C4960,240,4880,240,4800,240C4720,240,4640,240,4560,240C4480,240,4400,240,4320,240C4240,240,4160,240,4080,240C4000,240,3920,240,3840,240C3760,240,3680,240,3600,240C3520,240,3440,240,3360,240C3280,240,3200,240,3120,240C3040,240,2960,240,2880,240C2800,240,2720,240,2640,240C2560,240,2480,240,2400,240C2320,240,2240,240,2160,240C2080,240,2000,240,1920,240C1840,240,1760,240,1680,240C1600,240,1520,240,1440,240C1360,240,1280,240,1200,240C1120,240,1040,240,960,240C880,240,800,240,720,240C640,240,560,240,480,240C400,240,320,240,240,240C160,240,80,240,40,240L0,240Z'
        ></path>
        <defs>
          <linearGradient id='sw-gradient-2' x1='0' x2='0' y1='1' y2='0'>
            <stop
              stop-color='rgba(39.559, 48.565, 106.606, 1)'
              offset='0%'
            ></stop>
            <stop
              stop-color='rgba(97.499, 24.068, 56.704, 0.89)'
              offset='100%'
            ></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: 'translate(0, 100px)', opacity: 0.8 }}
          fill='url(#sw-gradient-2)'
          d='M0,48L40,64C80,80,160,112,240,120C320,128,400,112,480,96C560,80,640,64,720,52C800,40,880,32,960,40C1040,48,1120,72,1200,100C1280,128,1360,160,1440,160C1520,160,1600,128,1680,116C1760,104,1840,112,1920,116C2000,120,2080,120,2160,120C2240,120,2320,120,2400,124C2480,128,2560,136,2640,132C2720,128,2800,112,2880,104C2960,96,3040,96,3120,96C3200,96,3280,96,3360,100C3440,104,3520,112,3600,100C3680,88,3760,56,3840,40C3920,24,4000,24,4080,36C4160,48,4240,72,4320,92C4400,112,4480,128,4560,144C4640,160,4720,176,4800,172C4880,168,4960,144,5040,136C5120,128,5200,136,5280,140C5360,144,5440,144,5520,132C5600,120,5680,96,5720,84L5760,72L5760,240L5720,240C5680,240,5600,240,5520,240C5440,240,5360,240,5280,240C5200,240,5120,240,5040,240C4960,240,4880,240,4800,240C4720,240,4640,240,4560,240C4480,240,4400,240,4320,240C4240,240,4160,240,4080,240C4000,240,3920,240,3840,240C3760,240,3680,240,3600,240C3520,240,3440,240,3360,240C3280,240,3200,240,3120,240C3040,240,2960,240,2880,240C2800,240,2720,240,2640,240C2560,240,2480,240,2400,240C2320,240,2240,240,2160,240C2080,240,2000,240,1920,240C1840,240,1760,240,1680,240C1600,240,1520,240,1440,240C1360,240,1280,240,1200,240C1120,240,1040,240,960,240C880,240,800,240,720,240C640,240,560,240,480,240C400,240,320,240,240,240C160,240,80,240,40,240L0,240Z'
        ></path>
      </svg>

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
              className='hover:animate-bounce rounded-full text-white lg:btn-sm justify-center items-center hidden lg:flex '
              data-aos='fade-down'
              data-aos-delay='1400'
            >
              <AiOutlinePlusCircle className='mr-2' />
              {btnText1}
            </button>
          </a>
        </div>
        {/* <div>
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
        </div>*/}
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
      <div className='w-full pb-1'></div>
    </header>
  )
}

export default Header
