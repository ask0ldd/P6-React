import '../styles/App.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Banner key="standard" type="standard"/>
        <Gallery/>
      </main>
      <Footer/>
      </div>
  );
}

export default App
