import React from 'react'

export default function PopUp({setPopUpMenu, itemsImg, description, itemsName}) {
    const showPopUp = () => {
        setPopUpMenu(false)
    }
  return (
    <div>
      <div className="popup">
        <div className="popup-container">
            <img src={itemsImg} alt="" />
            <p>{description}</p>
            <h3>{itemsName}</h3>
            <button>Order Now</button>
            <span className="close" onClick={showPopUp}>Close</span>
        </div>
      </div>
    </div>
  )
}
