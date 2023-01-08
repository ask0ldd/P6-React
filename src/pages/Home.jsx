import '../styles/App.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useFetch } from '../hooks/FetchHook'

function App() {

  const [jsonDatas, setJsonDatas] = useState();

  // logements.json dans public directory ie root
  const [isLoading, fetchedData] = useFetch(window.location.origin+'/logements.json')

  return (
    <div className="App">
      <Header/>
        <main className='main-home'>
          <Banner key="standard" type="standard"/>
          <Gallery dataset={fetchedData} /> {/* <Gallery dataset={jsonDatas} /> */}
        </main>
      <Footer/>
    </div>
  );
}

export default App