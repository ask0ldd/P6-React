import '../styles/ImmoCard.css'
import { PropTypes } from 'react'

const ImmoCard = (props) => {
    return (
    <article className="immocard">
        <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="Appartement cosy"/>
        <div>{props.nom} - Appartement cosy <br /> Appartement cosy - {props.description}</div>
    </article>
    )
}

/*ImmoCard.propTypes = {
    nom: PropTypes.string,
    description: PropTypes.string
}*/

export default ImmoCard