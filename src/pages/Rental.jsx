import '../styles/App.css'
import Header from '../components/Header'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'
import Slideshow from '../components/Slideshow'

function Rental() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Slideshow/>
      </main>
      <Footer/>
    </div>
  );
}

export default Rental