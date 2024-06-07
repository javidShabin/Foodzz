import React from 'react'
import { logo } from '../assets'

export default function Header() {
  return (
    <header>
        <div className="container">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        </div>
    </header>
  )
}
