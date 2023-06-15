import '../styles/RentalDetails.css'
import Tags from '../components/Tags/Tags'
import Ratings from '../components/Ratings/Ratings'
import Host from '../components/Host'

const RentalDetails = ({datas}) => {
  return (
  <section id="rentalDetails">
    <div id="headingsNtags">
      <h1>{datas.title}</h1>
      <p>{datas.location}</p>
      <Tags tags={datas.tags}/>
    </div>
    <div id="ownerNratings">
      <Host host={datas.host}/>
      <Ratings rating={datas.rating} />
    </div>
  </section>
  )
}
  
export default RentalDetails