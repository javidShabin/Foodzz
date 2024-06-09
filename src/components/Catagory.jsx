import React from 'react'

export default function Catagory(props) {
    let catItems = props.catagoryItems

  return (
    <>
    <div className="catCard">
        <img src={catItems.imgSrc} alt="" />
        <h3>{catItems.name}</h3>
    </div>
    </>
  )
}
