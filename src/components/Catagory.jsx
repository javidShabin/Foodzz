import React from 'react'

export default function Catagory({catagoryItems, showPopUpHandler}) {

  return (
    <>
    <div className="catCard" onClick={showPopUpHandler}>
        <img src={catagoryItems.imgSrc} alt="" />
        <h3>{catagoryItems.name}</h3>
    </div>
    </>
  )
}
