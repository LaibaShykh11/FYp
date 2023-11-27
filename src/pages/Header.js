import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'

const Container = styled(AppBar)`
  background: linear-gradient(
    180deg,
    rgba(255, 88, 90, 100) 10.08%,
    rgba(45, 40, 62, 100) 100%
  );
  width: 1971px;
  height: 80px;
  flex-shrink: 0;
`
const Header = () => {
  return (
    <Container>
      <Toolbar>
        <img src='' alt='logo' />
      </Toolbar>
    </Container>
  )
}

export default Header
