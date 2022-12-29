import '../styles/RentalDetails.css'
import Tags from '../components/Tags'
import Ratings from '../components/Ratings'
import Host from '../components/Host'

const RentalDetails = (props) => {
    console.log(props.datas)
    return (
    <section id="rentalDetails">
      <div id="headingsNtags">
        <h1>Cozy loft on the Canal Saint-Martin</h1>
        <p>Paris, Île-de-France</p>
        <Tags />
      </div>
      <div id="ownerNratings">
        <Host host={props.datas.host}/>
        <Ratings />
      </div>
    </section>
    )
  }
  
export default RentalDetails