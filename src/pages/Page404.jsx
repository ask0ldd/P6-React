import '../styles/App.css'
import '../styles/404.css'
import Header from '../components/Header'

function Page404() {
  return (
    <div className="App">
      <Header/>
      <h1 id="h404">404</h1>
      <p id="p404">Oups! La page que vous demandez n'existe pas.</p>
    </div>
  );
}

export default Page404