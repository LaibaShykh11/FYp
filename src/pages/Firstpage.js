import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Interview from './Interview'
import Brands from './Brands'
import Feature1 from './Feature1'
import Feature2 from './Feature2'
import Feature3 from './Feature3'
import Feature4 from './Feature4'
import Feature5 from './Feature5'
import Footer from './Footer'

function Firstpage() {
  return (
    <div>
      <Header />
      <Hero />
      <Interview />
      <Brands />
      {/* <div className='h-[4000px]'></div> */}
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature5 />
      <Footer />
    </div>
  )
}

export default Firstpage
