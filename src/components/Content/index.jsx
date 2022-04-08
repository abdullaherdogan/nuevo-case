import React from 'react'
import { useStep } from '../../context/StepContext'
import { Models, Colors, Accessories, Summary } from '../../components/Steps'

const Content = () => {
  const steps = [<Models />, <Colors />, <Accessories />, <Summary />]

  const { currentStep } = useStep()
  return (
    <section className='content-area'>
      {steps[currentStep]}
    </section>
  )
}

export default Content