import '../styles/Ratings.css'
import redstar from '../assets/redstar.svg'
import greystar from '../assets/greystar.svg'

const Star = (props) => {
    return (
    <img className="star-red" src={props.src === "redstar" ? redstar : greystar} alt="positive star" />
    )
}

const Ratings = (props) => {

    const buildRatings = (x) => 
    {
        let ratings = ["","","","",""]
        ratings.fill({"src" : "redstar"}, 0, 5)
        if(x<5) ratings.fill({"src" : "greystar"}, x, 5)
        return ratings
    }

    const ratingsArray = buildRatings(parseInt(props.rating))

    return (
    <div className="starsContainer">
        {ratingsArray.map((r, index) => <Star key={index} src={r.src}/>)}
    </div>
    )
}
 
export default Ratings

/*
props 
state
carousel
collapse
react navigation
create react app

Déroulement soutenance P6 :
4:07
Durant la présentation orale, l’évaluateur interprétera le rôle du CTO. La soutenance est structurée de la manière suivante :
Présentation des livrables (15 minutes)
Présentation des différentes pages, avec la navigation entre elles, et les interactions avec tous les éléments interactifs.
Parcours des fichiers de code avec le mentor. Mise en avant des différents composants React.
Discussion (10 minutes)
Le mentor, qui joue le rôle du CTO, posera des questions sur la méthodologie adoptée et sur les livrables.
Le mentor challengera au maximum les décisions techniques que vous avez prises ; il faudra donc que vous soyez capable de les justifier, et de défendre votre travail.
Débriefing (5 minutes)
À la fin de la soutenance, l'évaluateur arrêtera de jouer le rôle du CTO pour vous permettre de débriefer ensemble.
*/