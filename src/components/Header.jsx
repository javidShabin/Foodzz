import {useState} from 'react'
import { bag, home, logo, menu, search, user } from '../assets'

export default function Header() {
    let [menuClass, setMenuClass] = useState("")
    const showSideBar = () => {
        alert("redy")
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
            <div className="toggle-menu">
                <img src={menu} onClick={showSideBar}/>
            </div>
        </div>
    </header>
  )
}
