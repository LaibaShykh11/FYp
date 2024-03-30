import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-800 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          <div className='flex items-center justify-center lg:justify-start mb-4 lg:mb-0'>
            {/* <Logo className='h-8 w-auto fill-current text-white' /> */}

            <img className='h-[80px] ' src='logo.png' alt='logo' />

            <div className='ml-2 text-white text-4xl font-bold'>
              Code Collab
            </div>
          </div>
          <div className='flex flex-wrap space-y-2 lg:space-y-0 lg:space-x-6 text-gray-400 text-lg'>
            <a href='/' className='hover:text-white'>
              Home
            </a>
            <a href='#' className='hover:text-white'>
              Features
            </a>
            <a href='#' className='hover:text-white'>
              FAQ
            </a>
            <a href='#' className='hover:text-white'>
              Contact
            </a>
          </div>
        </div>
        <div className='mt-8 text-center lg:text-left text-gray-400 text-sm'>
          <p>
            &copy; {new Date().getFullYear()} Code Collab. All rights reserved.
          </p>
          <p className='mt-2'>Made with ❤️</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
