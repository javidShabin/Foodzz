import React from 'react'

export default function Catagory({catagoryItems}) {

  return (
    <>
    <div className="catCard">
        <img src={catagoryItems.imgSrc} alt="" />
        <h3>{catagoryItems.name}</h3>
    </div>
    </>
  )
}
