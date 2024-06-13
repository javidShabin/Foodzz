import React from 'react'
import { non } from '../assets'

export default function ResItems({resItems}) {

    console.log(resItems)

  return (
    <>
      <li>
        <div className="left">
            <img src={non} alt="" />
        <h3>{resItems.name}</h3>
        <span>$10</span><br/>
        <button>Add</button>
        </div>
        <div className="right">
        <img src={resItems.imgSrc} alt="" />
        </div>
      </li>
    </>
  )
}