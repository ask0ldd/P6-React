import '../styles/Gallery.css'
import ImmoCard from './ImmoCard'

const Gallery = (props) => {
    if(props.dataset)
    {

    return (
    <section id="gallery">
        {props.dataset.map((logement, index) => (<a href={"hebergement/"+index} key={logement.id}><ImmoCard title={logement.title} cover={logement.cover}/></a>))}
    </section>
    )
    }
}

export default Gallery