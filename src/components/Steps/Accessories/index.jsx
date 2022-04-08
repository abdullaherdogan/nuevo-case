import React, { useEffect, useState } from 'react'
import { useStep } from '../../../context/StepContext'
import AccessoryBox from './AccessoryBox'
import './style.css'

const Accessories = () => {
  const { setCar } = useStep()
  const [accessoryList, setAccessoryList] = useState([
    {
      name: "SEAT FREE SYNC PACK EASY JET",
      price: "7.500",
      isActive: false
    },
    {
      name: "Maintenance Program Upgrade",
      price: "1.250",
      isActive: false
    },
    {
      name: "SEAT FREE SYNC PACK EASY JET",
      price: "13.700",
      isActive: false
    },
    {
      name: "SEAT FREE SYNC PACK EASY JET",
      price: "8.600",
      isActive: false
    },
    {
      name: "SEAT FREE SYNC PACK EASY JET",
      price: "9.000",
      isActive: false
    },
    {
      name: "SEAT FREE SYNC PACK EASY JET",
      price: "7.500",
      isActive: false
    }
  ])

  useEffect(() => {
    setCar("accessories", accessoryList.filter(item => item.isActive))
  }, [accessoryList])

  return (
    <div className='row accessories-container justify-content-center'>
      <div className="col-md-12 d-flex justify-content-center">
        <p className='accessories-text text-center'>Seçtiğin araca ait özellikler, konforun ve yaşam stilini belirler.</p>
      </div>
      {
        accessoryList.map((accessory, index) => (
          <AccessoryBox key={index} index={index} accessory={accessory} accessoryList={accessoryList} setAccessoryList={setAccessoryList} />
        ))
      }
    </div>
  )
}

export default Accessories