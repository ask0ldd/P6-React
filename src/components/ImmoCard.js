import '../styles/ImmoCard.css'
import { PropTypes } from 'prop-types'

const ImmoCard = (props) => {
    return (
    <article className="immocard">
        <img src={props.cover} alt="Appartement cosy"/>
        <div><p>{props.title}</p></div>
    </article>
    )
}

ImmoCard.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string
}

export default ImmoCard