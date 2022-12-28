import '../styles/Header.css'
import logo from '../assets/kasa.svg'
//import { Link } from 'react-router-dom'
//import NavItem from './NavItem'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
    <header>
        <img src={logo} alt="logo kasa"/>
        <nav>
            <ul>
                <li><NavLink to="/" className={({isActive}) => isActive ? "active-link" : undefined }>Accueil</NavLink></li>
                <li><NavLink to="/apropos" className={({isActive}) => isActive ? "active-link" : undefined }>A Propos</NavLink></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header