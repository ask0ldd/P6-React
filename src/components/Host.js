import '../styles/Host.css'
import portrait from '../assets/portrait.jpg'

const Host = (props) => {
    return (
    <div className="hostContainer">
        <p>Alexandre<br />Dumas</p>
        <img src={portrait} alt="host portrait" />
    </div>
    )
}

export default Host