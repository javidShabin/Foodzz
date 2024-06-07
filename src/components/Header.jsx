import {useState} from 'react'
import { bag, home, logo, menu, search, user } from '../assets'

export default function Header() {
    let [menuClass, setMenuClass] = useState("")
    const showSideBar = () => {
        // State manage ment
        setMenuClass(prevMenuClass => {
            if(prevMenuClass === ""){
                return "active"
            }else {
                return ""
            }
        })
    }
  return (
    <header className='header'>
        <div className="container">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul className={menuClass}>
                <li><a href="#"><img src={home} />Home</a></li>
                <li><a href="#"><img src={search} />Search</a></li>
                <li><a href="#"><img src={bag} />Cart</a></li>
                <li><a href="#"><img src={user} />Account</a></li>
            </ul>
            <div className="toggle-menu">
                <img className={menuClass} src={menu} onClick={showSideBar}/>
            </div>
        </div>
    </header>
  )
}
