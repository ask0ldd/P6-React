import '../styles/Gallery.css'
import ImmoCard from './ImmoCard'
import { Link } from 'react-router-dom'

const Gallery = (props) => {

    return (
    <section id="gallery">
        {
            (props.dataset && /* if datas got fetched */
                props.dataset.map((logement, index) => (<Link className="anchor" to={"hebergement/"+logement.id} key={logement.id}><ImmoCard title={logement.title} cover={logement.cover}/></Link>)))
            || (!props.dataset && /* if not */
                <div style={{margin : "0 auto", fontWeight : "600", fontSize:"32px", lineHeight:"50px"}}>Datas can't be fetched</div>) /* !!!transform into a error box component */}
    </section>
    )
}

export default Gallery