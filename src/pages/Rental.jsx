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
import { Navigate } from 'react-router-dom'

function Rental() {

  let rentalId = useParams().id; // get id from the uri

  const [jsonDatas, setJsonDatas] = useState();

  useEffect(() => 
  {
    const fetching = () => fetch(window.location.origin+'/logements.json').then(response => response.json()).then(datas => setJsonDatas(datas)).catch(error=> console.log(error));
    fetching() // useeffect needs a function not a promise
  },[]);
  
  if(!jsonDatas) return (<div className="App"><Header/><Footer/></div>) // as long as the promise isnt resolved : footer & header only

  const rentalDatas = Array.prototype.filter.call(jsonDatas, (x) => x.id === rentalId)[0] // check with filter if could find one object containing the useparams id
  
  if(rentalDatas === undefined) return (<Navigate to="/404" replace={true} />) // route /404 not defined so 404

  return (
    <div className="App">
      <Header/>
      <main className='main-rental'>
        <Slideshow picslist={rentalDatas.pictures}/>
        <RentalDetails datas={{'rating' : rentalDatas.rating, 'host' : rentalDatas.host, 'title' : rentalDatas.title, 'location' : rentalDatas.location, 'tags' : rentalDatas.tags}}/>
        <div id="collapsesContainer">
          <Collapse key={"description"+rentalDatas.id} heading="Description" body={rentalDatas.description} headnbodystyle={['rental-heading', 'rental-body']}/> {/* heading pass the title of the collapse, body pass the content of the main div */}
          <Collapse key={"equipements"+rentalDatas.id} heading="Equipements" body={rentalDatas.equipments.reduce((ac, cv) => ac+cv+'<br />', '')} headnbodystyle={['rental-heading', 'rental-body']}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Rental