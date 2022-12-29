import '../styles/Gallery.css'
import ImmoCard from './ImmoCard'

const logements = [
    {'key':"1", 'nom':'logement1', 'description':'blablabliblablabla'},
    {'key':"2", 'nom':'logement2', 'description':'blablabliblablabla'},
    {'key':"3", 'nom':'logement3', 'description':'blablabliblablabla'},
    {'key':"4", 'nom':'logement4', 'description':'blablabliblablabla'}
]

const Gallery = () => {
    return (
    <section id="gallery">
        {logements.map((logement) => (<a href="hebergement" key={'link'+logement.key}><ImmoCard nom={logement.nom} description={logement.description}/></a>))}
    </section>
    )
}

export default Gallery