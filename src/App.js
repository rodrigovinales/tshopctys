import './App.css';
import NavBar from './components/NavBar';
import logoHeader from "./img/LOGOshopcomputers.png";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <hr/>
      <span> Se utiliza bootstrap instalandolo y realizando import sobre el mismo.</span>
      <p> Se agrega menu colapsable </p>
    </div>
  );
}

export default App;
