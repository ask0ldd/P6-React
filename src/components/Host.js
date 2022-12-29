import '../styles/Host.css'
//import portrait from '../assets/portrait.jpg'

const Host = (props) => {
    const [firstname,lastname] = props.host.name.split(' ')
    return (
    <div className="hostContainer">
        <p>{firstname}<br />{lastname}</p>
        <img src={props.host.picture} alt="host portrait" />
    </div>
    )
}

export default Host