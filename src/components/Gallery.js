import '../styles/Gallery.css'
import ImmoCard from './ImmoCard'
import { Link } from 'react-router-dom'
import { ErrorBox } from './ErrorBox'

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

export default Gallery