import React from 'react'

const AccessoryBox = ({ accessory, index, setAccessoryList }) => {
  const handleClick = () => {
    setAccessoryList(prev => (prev.map((item, i) => {
      if (i === index) {
        item.isActive = !item.isActive
        return item
      } else {
        return item
      }
    })))
  }
  return (
    <div onClick={handleClick} className={`col-md-4 accessory-box ${accessory.isActive ? "active" : ""}`}>
      <div className="accessory-name">
        {accessory.name}
      </div>
      <div className="price-area">
        <div className="price">
          {accessory.price} TL
        </div>
        <div className={`select-icon-accessory ${accessory.isActive ? "active" : ""}`}>
          <img src="assets/images/select-icon.png" alt="Icon" />
        </div>
      </div>
    </div>
  )
}

export default AccessoryBox