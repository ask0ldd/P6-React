import '../styles/Header.css';
import logo from '../assets/kasa.svg'

const Header = () => {
    return (
    <header>
        <img src={logo} alt="logo kasa"/>
        <nav>
            <ul>
                <li>Accueil</li>
                <li>A Propos</li>
            </ul>
        </nav>
    </header>
    )
}

export default Header