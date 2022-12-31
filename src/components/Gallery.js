import '../styles/Gallery.css'
import ImmoCard from './ImmoCard'
import { Link } from 'react-router-dom'

const Gallery = (props) => {
    /*if(props.dataset)
    {*/
    return (
    <section id="gallery">
        {props.dataset && 
        props.dataset.map((logement, index) => (<Link className="anchor" to={"hebergement/"+logement.id} key={logement.id}><ImmoCard title={logement.title} cover={logement.cover}/></Link>))}
    </section>
    )
    /*}*/
}

export default Gallery