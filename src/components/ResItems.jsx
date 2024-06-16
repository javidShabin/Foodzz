import React, {useContext} from 'react'
import { non } from '../assets'
import { myContext } from '../App'

export default function ResItems({resItems}) {
    const addItemFnc = useContext(myContext)
  return (
    <>
      <li>
        <div className="left">
            <img src={non} alt="" />
        <h3>{resItems.name}</h3>
        <span>$10</span><br/>
        <button onClick={()=>{addItemFnc(resItems.imgSrc)}}>Add</button>
        </div>
        <div className="right">
        <img src={resItems.imgSrc} alt="" />
        </div>
      </li>
    </>
  )
}
