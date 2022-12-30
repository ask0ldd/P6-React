import '../styles/App.css'
import '../styles/APropos.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'

const collapses = [
    {"key" : "Fiabilité", "heading": "Fiabilité", "body" : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."},
    {"key" : "Respect", "heading": "Respect", "body" : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."},
    {"key" : "Service", "heading": "Service", "body" : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."},
    {"key" : "Sécurité", "heading": "Sécurité", "body" : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
]

function APropos() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Banner key="apropos" type="apropos"/>
        <section id="collapses-section">
        {collapses.map((collapse) => (<Collapse key={collapse.heading} heading={collapse.heading} body={collapse.body} fontsize="24px"/>))}
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default APropos