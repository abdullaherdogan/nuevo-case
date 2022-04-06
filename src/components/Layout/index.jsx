import React from 'react'
import ButtonBar from './ButtonBar'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <ButtonBar />
    </>
  )
}

export default Layout