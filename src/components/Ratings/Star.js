import '../../styles/Ratings.css'
import redstar from '../../assets/redstar.svg'
import greystar from '../../assets/greystar.svg'
import { PropTypes } from 'prop-types'

const Star = ({src}) => {
    return (
    <img className="star-red" src={src === "redstar" ? redstar : greystar} alt="positive star" />
    )
}

Star.propTypes = {
    src: PropTypes.string,
}

export default Star