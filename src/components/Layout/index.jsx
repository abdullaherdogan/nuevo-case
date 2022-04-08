import React from 'react'
import ButtonBar from './ButtonBar'
import Navbar from './Navbar'
import Content from '../Content'
import './style.css'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Content />
      <ButtonBar />
    </>
  )
}

export default Layout