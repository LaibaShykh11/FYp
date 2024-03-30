import React from 'react'
import { nav } from '../LandingData'

function Nav() {
  return (
    <nav>
      <ul className='flex gap-x-10'>
        {nav.map((item, index) => {
          //destucture item
          const { href, name } = item
          return (
            <li key={index}>
              <a
                className='text-white hover:text-accent transition'
                href={href}
              >
                {name}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
