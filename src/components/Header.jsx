
import { bag, home, logo, map, menu, search, user } from '../assets'

export default function Header() {
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
            <div className="toggle-menu">
                <img src={menu}/>
            </div>
        </div>
    </header>
  )
}
