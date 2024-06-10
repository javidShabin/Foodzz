
import { bag, home, logo, map, menu, search, user } from '../assets'
import { useState } from 'react'

export default function Header() {
    let [showMenu, setShowMenu] = useState("")
    const showMenuBar = () => {
        setShowMenu(prevState => (prevState === "" ? "active" : ""))
    }
  return (
    <header className='header'>
        <div className="container">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul>
                <li><a href="#"><img src={home} />Home</a></li>
                <li><a href="#"><img src={search} />Search</a></li>
                <li><a href="#"><img src={bag} />Cart</a></li>
                <li><a href="#"><img src={user} />Account</a></li>
            </ul>
            <div className="location">
                <span><img src={map}/><b>Tirur, Malappuram</b></span>
            </div>
            {/* Toggle bar */}
            <div className={`toggle-bar ${showMenu}`}>
                <ol>
                <li><a href="#"><img src={home} />Home</a></li>
                <li><a href="#"><img src={search} />Search</a></li>
                <li><a href="#"><img src={bag} />Cart</a></li>
                <li><a href="#"><img src={user} />Account</a></li>
                </ol>
                <span><img src={map}/><b>Tirur, Malappuram</b></span>
            </div>
            
            <div className="toggle-menu">
                <img src={menu} onClick={showMenuBar}/>
            </div>
            
        </div>
    </header>
  )
}
