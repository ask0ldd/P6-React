import '../styles/Gallery.css'
import ImmoCard from './ImmoCard'

/*const logements = [
    {'key':"1", 'nom':'logement1', 'description':'blablabliblablabla'},
    {'key':"2", 'nom':'logement2', 'description':'blablabliblablabla'},
    {'key':"3", 'nom':'logement3', 'description':'blablabliblablabla'},
    {'key':"4", 'nom':'logement4', 'description':'blablabliblablabla'}
]*/

const Gallery = (props) => {
    if(props.dataset)
    {
    /*const logements = [
        {'key':props.dataset[0].id, 'title':props.dataset[0].title, 'cover':props.dataset[0].cover},
        {'key':props.dataset[1].id, 'title':props.dataset[1].title, 'cover':props.dataset[1].cover},
        {'key':props.dataset[2].id, 'title':props.dataset[2].title, 'cover':props.dataset[2].cover},
        {'key':props.dataset[3].id, 'title':props.dataset[3].title, 'cover':props.dataset[3].cover},
        {'key':props.dataset[4].id, 'title':props.dataset[4].title, 'cover':props.dataset[4].cover}
    ]*/

    //console.log(props)

    return (
    <section id="gallery">
        {props.dataset.map((logement, index) => (<a href={"hebergement/"+index} key={logement.id}><ImmoCard title={logement.title} cover={logement.cover}/></a>))}
    </section>
    )
    }
}

/*
{logements.map((logement) => (<a href="hebergement" key={logement.key}><ImmoCard title={logement.title} cover={logement.cover}/></a>))}
*/

export default Gallery