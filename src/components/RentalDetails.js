import '../styles/RentalDetails.css'
import Tags from '../components/Tags'
import Ratings from '../components/Ratings'

const RentalDetails = () => {
    return (
    <section id="rentalDetails">
      <div id="headingsNtags">
        <h1>Cozy loft on the Canal Saint-Martin</h1>
        <p style={{margin:"10px 0 0 0"}}>Paris, Île-de-France</p>
        <Tags />
      </div>
      <div id="ownerNratings">
        <Ratings />
      </div>
    </section>
    )
  }
  
export default RentalDetails