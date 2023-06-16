import '../styles/Host.css'
import { PropTypes } from 'prop-types'

const Host = ({host}) => {
    const [firstname,lastname] = host.name.split(' ')
    return (
    <div className="hostContainer">
        <p>{firstname}<br />{lastname}</p>
        <img src={host.picture} alt="host portrait" />
    </div>
    )
}

Host.propTypes = {
    host: PropTypes.shape({
            name: PropTypes.string,
            picture: PropTypes.string,
    })
}

export default Host