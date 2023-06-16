import '../../styles/Ratings.css'
import Star from './Star'
import { PropTypes } from 'prop-types'

/*const Star = (props) => {
    return (
    <img className="star-red" src={props.src === "redstar" ? redstar : greystar} alt="positive star" />
    )
}*/

const Ratings = ({rating}) => {

    const buildRatings = (x) => 
    {
        let ratings = ["","","","",""]
        ratings.fill({"src" : "redstar"}, 0, 5)
        if(x<5) ratings.fill({"src" : "greystar"}, x, 5)
        return ratings
    }

    const ratingsArray = buildRatings(parseInt(rating))

    return (
    <div className="starsContainer">
        {ratingsArray.map((r, index) => <Star key={index} src={r.src}/>)}
    </div>
    )
}

Star.propTypes = {
    rating: PropTypes.string,
}
 
export default Ratings