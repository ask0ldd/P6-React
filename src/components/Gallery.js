import '../styles/Gallery.css'
import ImmoCard from './ImmoCard'
import { Link } from 'react-router-dom'
import { ErrorBox } from './ErrorBox'
import { PropTypes } from 'prop-types'
// import { Suspense } from 'react'

const Gallery = ({dataset, error, loadingState}) => {

    return (
        <section id="gallery">
            {
                (dataset && /* if datas got fetched */
                    dataset.map((logement) => (<Link className="anchor" to={"hebergement/"+logement.id} key={logement.id}>
                        <ImmoCard title={logement.title} cover={logement.cover}/></Link>)))
                || ((error && !loadingState) && /* !props.loadingState > don't show the error div when no real error, ie : it's only loading */
                    <ErrorBox />)}
        </section>
    )
}

/*const Loading = () => {
    return(
        <div>Loading...</div>
    )
}*/

Gallery.propTypes = {
    dataset: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            pictures: PropTypes.arrayOf(PropTypes.string),
            description: PropTypes.string,
            host: PropTypes.object,
            rating: PropTypes.string,
            location: PropTypes.string,
            equipments: PropTypes.arrayOf(PropTypes.string),
            tags: PropTypes.arrayOf(PropTypes.string),
        })
    )
  }

export default Gallery