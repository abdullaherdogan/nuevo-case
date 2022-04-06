import React from 'react'
import { useStep } from '../../context/StepContext'

const NavLink = ({ label, index }) => {
  const { currentStep } = useStep()
  return (
    <li className={`${currentStep == index ? "" : ""}`}>{label}</li>
  )
}

const Navbar = () => {
  const labels = ['Models', 'Colors', 'Accessories', 'Summary']
  return (
    <nav className='nav-container'>
      <ul className='ps-0 d-flex justify-content-between'>
        {
          labels.map((label, index) => <NavLink label={label} index={index} />)
        }
      </ul>
    </nav>
  )
}

export default Navbar