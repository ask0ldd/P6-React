import '../styles/Ratings.css'
import redstar from '../assets/redstar.svg'
import greystar from '../assets/greystar.svg'

const Star = (props) => {
    return (
    <img className="star-red" src={props.src === "redstar" ? redstar : greystar} alt="positive star" />
    )
}

const Ratings = () => {

    let ratingsArray = []
    const rating = "3"

    const buildRatings = (x) => 
    {
        let i=0
        do{
            ratingsArray.push({"key":"star"+i, "src" : "redstar"})
            i++
        }while(i<x)
        do{
            ratingsArray.push({"key":"star"+i, "src" : "greystar"})
            i++
        }while(i<5)
    }

    buildRatings(rating)

    return (
    <div className="starsContainer">
        {ratingsArray.map((r) => <Star key={r.key} src={r.src}/>)}
    </div>
    )
}
 
export default Ratings