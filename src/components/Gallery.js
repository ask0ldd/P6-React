import '../styles/Gallery.css'
import ImmoCard from './ImmoCard'
import { Link } from 'react-router-dom'

const Gallery = (props) => {
    if(props.dataset)
    {
        return (
        <section id="gallery">
            {props.dataset.map((logement, index) => (<Link to={"hebergement/"+index} key={logement.id}><ImmoCard title={logement.title} cover={logement.cover}/></Link>))} 
        </section>
        )
    }
}

export default Gallery
/*
{props.dataset.map((logement, index) => (<a href={"hebergement/"+index} key={logement.id}><ImmoCard title={logement.title} cover={logement.cover}/></a>))} 
*/