
import { Link } from 'react-router-dom'
import { bag, home, logo, map, menu, search, user, } from '../assets'
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
                <li><Link to="/"><img src={home} />Home</Link></li>
                <li><Link to="#"><img src={search} />Search</Link></li>
                <li><Link to="cartPage"><img src={bag} />Cart</Link></li>
                <li><Link to="#"><img src={user} />Account</Link></li>
            </ul>
            <div className="location">
                <span><img src={map}/><b>Tirur, Malappuram</b></span>
            </div>
            {/* Toggle bar */}
            <div className={`toggle-bar ${showMenu}`}>
                <ol>
                <li><Link to="/"><img src={home} />Home</Link></li>
                <li><Link to="#"><img src={search} />Search</Link></li>
                <li><Link to="#"><img src={bag} />Cart</Link></li>
                <li><Link to="#"><img src={user} />Account</Link></li>
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
