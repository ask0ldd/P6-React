import '../../styles/Ratings.css'
import redstar from '../../assets/redstar.svg'
import greystar from '../../assets/greystar.svg'

const Star = ({src}) => {
    return (
    <img className="star-red" src={src === "redstar" ? redstar : greystar} alt="positive star" />
    )
}

export default Star