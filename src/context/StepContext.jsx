import { createContext, useContext, useState } from "react"
import { Steps } from "../components/Steps"

const StepContext = createContext()

export const StepProvider = ({ children }) => {
  const { Models, Colors, Accessories, Summary } = Steps
  const steps = [<Models />, <Colors />, <Accessories />, <Summary />]
  const [currentStep, setCurrentStep] = useState(0)
  const step = steps[currentStep]
  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }
  const values = {
    step,
    nextStep,
    currentStep
  }
  return <StepContext.Provider value={values}>{children}</StepContext.Provider>
}

export const useStep = () => useContext(StepContext)