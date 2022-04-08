import React from "react"
import { useStep } from "../../context/StepContext"

const ButtonBar = () => {
  const { nextStep, currentStep, selectedCar } = useStep()
  const buttonBarTexts = [
    'Colors',
    'Accessories',
    'Summary',
    'Buy Now'
  ]
  return (
    <div className="button-bar w-75 d-flex align-items-center">
      <img className="button-bar-img" src={selectedCar.car.photo} alt="Car" />
      <div className="button-bar-text">
        <div>TOTAL</div>
        <div className="second-text">{selectedCar.car.price} TL</div>
      </div>
      <button onClick={nextStep}>{buttonBarTexts[currentStep]}</button>
    </div>
  )
}

export default ButtonBar
