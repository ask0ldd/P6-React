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

  let rentalId = useParams().id;

  const [jsonDatas, setJsonDatas] = useState();

  useEffect(() => 
    {
      const fetching = () => fetch(window.location.origin+'/logements.json').then(response => response.json()).then(datas => setJsonDatas(datas)).catch(error=> console.log(error));
      fetching()
    },[]);
  
  // as long as promise not resolved no rental body
  if(!jsonDatas) return (<div className="App"><Header/><Footer/></div>)

  // check with filter if could find one object with the useparams id
  const rentalDatas = Array.prototype.filter.call(jsonDatas, (x) => x.id === rentalId)[0]
  // route /404 not defined so 404
  if(rentalDatas === undefined) return (<Navigate to="/404" replace={true} />)

  return (
    <div className="App">
      <Header/>
      <main className='main-rental'>
        <Slideshow picslist={rentalDatas.pictures}/>
        <RentalDetails datas={{'rating' : rentalDatas.rating, 'host' : rentalDatas.host, 'title' : rentalDatas.title, 'location' : rentalDatas.location, 'tags' : rentalDatas.tags}}/>
        <div id="collapsesContainer">
          <Collapse key={"description"+rentalDatas.id} heading="Description" body={rentalDatas.description} headnbodystyle={['rental-heading', 'rental-body']}/>
          <Collapse key={"equipements"+rentalDatas.id} heading="Equipements" body={rentalDatas.equipments.reduce((ac, cv) => ac+cv+'<br />', '')} headnbodystyle={['rental-heading', 'rental-body']}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Rental