import React from 'react'
import { useStep } from '../../../context/StepContext'
import './style.css'

const Colors = () => {
  const { selectedCar, setColor } = useStep()
  const handleClick = (e) => {
    setColor(e.target.value)
  }
  return (
    <div className="colors-container">
      <div className='car-area'>
        <div className="car-name">{selectedCar.car.model}</div>
        <img className='car-img' src={selectedCar.car.photo} alt="Car" />
        <div className="radio-buttons-group">
          <input type="radio" name="color" className='radio-red' onClick={handleClick} value='red' />
          <input type="radio" name="color" className='radio-black' onClick={handleClick} value='black' />
          <input type="radio" name="color" className='radio-grey' onClick={handleClick} value='grey' />
        </div>
      </div>
    </div>
  )
}

export default Colors