import '../styles/App.css'
import '../styles/Rental.css'
import Header from '../components/Header'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'
import Slideshow from '../components/Slideshow'
import RentalDetails from '../components/RentalDetails'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

/*const collapses = [
  {"key" : "Description", "heading": "Description", "body" : "Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied)."},
  {"key" : "Équipements", "heading": "Équipements", "body" : 'Climatisation<br />Wi-Fi<br>Cuisine<br>Espace de travail<br>Fer à repasser<br>Sèche-cheveux<br>Cintres'}
]*/

function Rental() {

  //console.log(window.location.origin)

  const [jsonDatas, setJsonDatas] = useState();

  useEffect(() => 
    {
      const fetching = () => fetch(window.location.origin+'/logements.json').then(response => response.json()).then(datas => {setJsonDatas(datas)}).catch(error=> console.log(error));
      fetching()
    },[]);

  let rentalId = useParams().id;
  
  //console.log(rentalId)
  
  if(jsonDatas)
  {
    const rentalDatas = jsonDatas[rentalId]
    return (
      <div className="App">
        <Header/>
        <main>
          <Slideshow picslist={rentalDatas.pictures}/>
          <RentalDetails datas={{'rating' : rentalDatas.rating, 'host' : rentalDatas.host}}/>
          <div id="collapsesContainer">
            <Collapse key={"description"+rentalDatas.id} heading="Description" body={rentalDatas.description} fontsize="18px"/>
            <Collapse key={"equipements"+rentalDatas.id} heading="Equipements" body={rentalDatas.equipments.reduce((ac, cv) => ac+cv+'<br />', '')} fontsize="18px"/>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default Rental

/*
{collapses.map((collapse) => (<Collapse key={collapse.heading} heading={collapse.heading} body={collapse.body} fontsize="18px"/>))}
<Collapse key={jsonDatas[0].id} heading="Description" body={jsonDatas[0].description} fontsize="18px"/>
*/