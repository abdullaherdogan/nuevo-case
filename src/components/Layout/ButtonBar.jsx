import React from 'react'
import { useStep } from '../../context/StepContext'

const ButtonBar = () => {
  const { nextStep } = useStep()
  return (
    <div><div className="btn btn-outline-primary" onClick={nextStep}>Next</div></div>
  )
}

export default ButtonBar