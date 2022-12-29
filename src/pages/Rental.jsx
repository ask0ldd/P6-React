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

function Rental() {

  const [jsonDatas, setJsonDatas] = useState();

  useEffect(() => 
    {
      const fetching = () => fetch(window.location.origin+'/logements.json').then(response => response.json()).then(datas => {setJsonDatas(datas)}).catch(error=> console.log(error));
      fetching()
    },[]);

  let rentalId = useParams().id;
  
  if(jsonDatas) // seulement qd promise resolved
  {
    const rentalDatas = jsonDatas[rentalId]
    return (
      <div className="App">
        <Header/>
        <main>
          <Slideshow picslist={rentalDatas.pictures}/>
          <RentalDetails datas={{'rating' : rentalDatas.rating, 'host' : rentalDatas.host, 'title' : rentalDatas.title, 'location' : rentalDatas.location, 'tags' : rentalDatas.tags}}/>
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