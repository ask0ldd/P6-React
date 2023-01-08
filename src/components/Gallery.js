import '../styles/Gallery.css'
import ImmoCard from './ImmoCard'
import { Link } from 'react-router-dom'
import { ErrorBox } from './ErrorBox'

const Gallery = (props) => {

    return (
    <section id="gallery">
        {
            (props.dataset && /* if datas got fetched */
                props.dataset.map((logement, index) => (<Link className="anchor" to={"hebergement/"+logement.id} key={logement.id}><ImmoCard title={logement.title} cover={logement.cover}/></Link>)))
            || ((props.error && !props.loadingState) && /* !props.loadingState > don't show the error div when no real error, ie : it's only loading */
                <ErrorBox />) /* !!!transform into a error box component */}
    </section>
    )
}

export default Gallery