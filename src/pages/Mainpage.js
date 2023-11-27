import React from 'react'
import Header from './Header'
import Code from './Code'
import Result from './Result'

const Mainpage = () => {
  return (
    <div>
      <Header />
      <img src='/logo.png' alt='Logo' style={{ width: 60 }} />
      <Code />
      <Result />
    </div>
  )
}

export default Mainpage
