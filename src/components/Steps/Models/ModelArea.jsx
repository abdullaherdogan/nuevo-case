import React from 'react'
import { useStep } from '../../../context/StepContext'
import './style.css'
const ModelArea = ({ model }) => {
  const { selectedCar, setCar } = useStep()
  const isActive = selectedCar.car.model === model.model
  return (
    <div className={`model-area col-md-6 ${isActive ? "active" : ""}`}>
      <div className={`select-icon ${isActive ? "active" : ""}`}>
        <img src="assets/images/select-icon.png" alt="Icon" />
      </div>
      <div className={`back-text ${isActive ? "active" : ""}`}>{model.model}</div>
      <img className={`model-area-img ${isActive ? "active" : ""}`} src={model.photo} alt="Car" />
      <p className={isActive ? "active" : ""}><b>{model.price}</b> <span>TL'den başlayan fiyatlarla</span></p>
      <button onClick={() => setCar('car', model)} className={`select-button ${isActive ? "active" : ""}`}>Select</button>
    </div>
  )
}

export default ModelArea