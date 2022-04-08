import React from 'react'
import ModelArea from './ModelArea'

const Models = () => {
  const cars = [
    {
      model: "Ibiza",
      desc: "Ibiza 1.3 Ecotech DSG",
      price: "193.500",
      photo: 'assets/images/car-1-red.png'
    },
    {
      model: "Arona",
      desc: "Arona 1.3 Ecotech DSG",
      price: "211.500",
      photo: 'assets/images/car-2-red.png'
    }
  ]

  return (
    <div className='row justify-content-center'>
      {
        cars.map((car, i) => <ModelArea key={i} model={car} />)
      }
    </div>
  )
}

export default Models