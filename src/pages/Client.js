import React from 'react'
import Avatar from 'react-avatar'

const Client = ({ username }) => {
  return (
    <div className='client pt-2'>
      <Avatar name={username} size={50} round='14px' />
      <span className='userName pl-2'>{username}</span>
    </div>
  )
}

export default Client
