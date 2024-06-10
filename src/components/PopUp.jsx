import React from 'react'

export default function PopUp({setPopUpMenu}) {
    const showPopUp = () => {
        setPopUpMenu(false)
    }
  return (
    <div>
      <div className="popup">
        <div className="popup-container">
            <h3>Show popup menu</h3>
            <button>Order Now</button>
            <span className="close" onClick={showPopUp}>Close</span>
        </div>
      </div>
    </div>
  )
}
