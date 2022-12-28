import '../styles/Header.css'
import logo from '../assets/kasa.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
    <header>
        <img src={logo} alt="logo kasa"/>
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/apropos">A Propos</Link></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header