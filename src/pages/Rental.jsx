import '../styles/App.css'
import '../styles/Rental.css'
import Header from '../components/Header'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'
import Slideshow from '../components/Slideshow'
import RentalDetails from '../components/RentalDetails'

const collapses = [
  {"key" : "Description", "heading": "Description", "body" : "Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied)."},
  {"key" : "Équipements", "heading": "Équipements", "body" : 'Climatisation<br />Wi-Fi<br>Cuisine<br>Espace de travail<br>Fer à repasser<br>Sèche-cheveux<br>Cintres'}
]

function Rental() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Slideshow/>
        <RentalDetails/>
        <div id="collapsesContainer">
          {collapses.map((collapse) => (<Collapse key={collapse.heading} heading={collapse.heading} body={collapse.body} fontsize="18px"/>))}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Rental