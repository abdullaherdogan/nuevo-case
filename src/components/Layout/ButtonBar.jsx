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
      <button onClick={nextStep}>{buttonBarTexts[currentStep]} {currentStep === buttonBarTexts.length - 1 ? <img className="basket" src="assets/images/basket.png" alt="Basket" /> : <img className="arrow" src="assets/images/right-arrow.png" alt="Right arrow" />}</button>
    </div>
  )
}

export default ButtonBar
