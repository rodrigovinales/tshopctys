import './App.css';
import NavBar from './components/NavBar';
import logoHeader from "./img/LOGOshopcomputers.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoHeader} className="logoHeader col-6" alt="logoHeader" />
      </header>
      <NavBar />
      <h1> Clase 3 - JSX y transpiling </h1>
      <p>
        Hola, este es el proyecto de la Clase 3 subida al gitHub.
      </p>
    </div>
  );
}

export default App;
