import '../styles/Host.css'

const Host = ({host}) => {
    const [firstname,lastname] = host.name.split(' ')
    return (
    <div className="hostContainer">
        <p>{firstname}<br />{lastname}</p>
        <img src={host.picture} alt="host portrait" />
    </div>
    )
}

export default Host