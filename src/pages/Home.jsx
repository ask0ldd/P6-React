import '../styles/App.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {

  const [jsonDatas, setJsonDatas] = useState();

  // logements.json dans public directory ie root
  useEffect(() => 
    {
      const fetching = () => fetch(window.location.origin+'/logements.json').then(response => response.json()).then(datas => setJsonDatas(datas)).catch(error=> console.log(error));
      fetching()
    },[]);

  //if(!jsonDatas) return(<div className="App"><Header/><Footer/></div>)

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

export default App

/*
        {jsonDatas && <main className='main-home'><Banner key="standard" type="standard"/>
        <Gallery dataset={jsonDatas} /></main>}
*/