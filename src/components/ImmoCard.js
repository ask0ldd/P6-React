import '../styles/ImmoCard.css'
import { PropTypes } from 'prop-types'

const ImmoCard = ({cover, title}) => {
    return (
    <article className="immocard">
        <img src={cover} alt="Appartement cosy"/>
        <p>{title}</p>
    </article>
    )
}

ImmoCard.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string
}

export default ImmoCard