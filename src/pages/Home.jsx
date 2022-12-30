import '../styles/App.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { useState } from 'react'
//import logements from '../datasets/logements.json'

function Home() {

  console.log(window.location.origin)

  const [jsonDatas, setJsonDatas] = useState();

  useEffect(() => 
    {
      const fetching = () => fetch(window.location.origin+'/logements.json').then(response => response.json()).then(datas => setJsonDatas(datas)).catch(error=> console.log(error));
      fetching()
    },[]);

    return (
      <div className="App">
        <Header/>
        <main className='main-home'>
          <Banner key="standard" type="standard"/>
          <Gallery dataset={jsonDatas} />
        </main>
        <Footer/>
      </div>
    );
}

export default Home
