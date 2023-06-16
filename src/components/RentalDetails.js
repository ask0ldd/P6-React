import '../styles/RentalDetails.css'
import Tags from '../components/Tags/Tags'
import Ratings from '../components/Ratings/Ratings'
import Host from '../components/Host'
import { PropTypes } from 'prop-types'

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

RentalDetails.propTypes = {
  datas: PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
          host: PropTypes.object,
          rating: PropTypes.string,
          location: PropTypes.string,
          tags: PropTypes.arrayOf(PropTypes.string),
  })
}
  
export default RentalDetails