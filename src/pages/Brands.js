import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { overview } from '../LandingData'

function Brands() {
  // Destructure overview data
  const { brands } = overview

  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true,
    autoplaySpeed: 1000, // Duration for each slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className='py-9 mt-9'>
      <div className='container mx-auto'>
        <Slider {...settings}>
          {brands.map((item, index) => {
            const { image, delay } = item
            return (
              <div key={index} data-aos='fade-up' fade-aos-delay={delay}>
                <img src={image} alt='' />
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export default Brands
