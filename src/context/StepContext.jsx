import { createContext, useContext, useState } from "react"

const StepContext = createContext()

export const StepProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedCar, setSelectedCar] = useState({
    car: {
      model: "Ibiza",
      desc: "Ibiza 1.3 Ecotech DSG",
      price: "193.500",
      photo: `assets/images/car-1-red.png`
    },
    color: "red",
    accessories: []
  })

  const setColor = (color) => {
    setSelectedCar(prev => ({ ...prev, car: { ...prev.car, photo: `assets/images/car-${prev.car.model === 'Ibiza' ? "1" : "2"}-${color}.png` } }))
  }

  const setCar = (key, value) => {
    setSelectedCar(prev => ({ ...prev, [key]: value }))
  }
  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }
  const values = {
    nextStep,
    currentStep,
    selectedCar,
    setCar,
    setColor
  }
  return <StepContext.Provider value={values}>{children}</StepContext.Provider>
}

export const useStep = () => useContext(StepContext)