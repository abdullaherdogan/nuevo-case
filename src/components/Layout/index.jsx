import React from 'react'
import { useStep } from '../../context/StepContext'
import ButtonBar from './ButtonBar'
import Navbar from './Navbar'

const Layout = () => {
  const { step } = useStep()
  return (
    <>
      <Navbar />
      {step}
      <ButtonBar />
    </>
  )
}

export default Layout