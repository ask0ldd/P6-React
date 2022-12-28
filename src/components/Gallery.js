import '../styles/Gallery.css'
import ImmoCard from './ImmoCard'

const logements = [
    {'id':"1", 'nom':'logement1', 'description':'blablabliblablabla'},
    {'id':"2", 'nom':'logement2', 'description':'blablabliblablabla'},
    {'id':"3", 'nom':'logement3', 'description':'blablabliblablabla'},
    {'id':"4", 'nom':'logement4', 'description':'blablabliblablabla'}
]

const Gallery = () => {
    return (
    <section id="gallery">
        {logements.map((logement) => (<ImmoCard id={logement.id} nom={logement.nom} description={logement.description}/>))}
    </section>
    )
}

export default Gallery