import React from 'react'
import { useStep } from '../../../context/StepContext'
import './style.css'
const Summary = () => {
  const { selectedCar } = useStep()
  return (
    <div className='row d-flex accessories-section justify-content-between'>
      <div className="col-sm-12 col-lg-7 d-flex justify-content-center align-items-center">
        <div className="model-area">
          <div className="back-text" >{selectedCar.car.model}</div>
          <img className="model-area-img" src={selectedCar.car.photo} alt="Car" />
        </div>
      </div>
      <div className="col-sm-12 col-lg-5 car-options-container d-flex flex-column justify-content-center">
        <div className="car-options">
          <div className='car-options-title'>Model</div>
          <div className='car-options-text'>{selectedCar.car.desc}</div>
        </div>
        <hr />
        <div className="car-options">
          <div className='car-options-title'>Color</div>
          <div className='car-options-text'>{selectedCar.color}</div>
        </div>
        <hr />
        <div className="car-options">
          <div className="car-options-title">
            Accessories
          </div>
          <div className="car-options-text w-100">{selectedCar.accessories.length > 0 ? selectedCar.accessories.map((item) => item.name).join(" + ") : "No Accessory"}</div>
        </div>
      </div>
    </div>
  )
}

export default Summary