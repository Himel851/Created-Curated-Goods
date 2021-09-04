import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import navpic from './Images/navbar.png';
import Body from './components/Body.js';
import ArtPrint from './components/ArtPrint';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <div>
        <p className="text-center">
          <a href="https://www.trouva.com/boutiques/dowse-in-bn31da" className="Start " target="_blank">International customers please shop our range via Trouva.com</a>
        </p>
      </div>


      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">MAIN</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">ART PRINTS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">MORE</a>
                </li>
                <li className="nav-item navPic">
                  <img src={navpic}></img>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Log in</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Serach</a>
                </li>
              </ul>
            </div>
          </div>


        </nav>
      </div>

      <div>
        <p className="para">
          Visit our new shop at 37 Gardner Street Brighton.<br/><br/>
          International customers please shop our range at <a className="text-black Start" href="https://www.trouva.com/boutiques/dowse-in-bn31da">Trouva.com</a>
        </p>

        <Body />

      </div>

      
        <ArtPrint/>

        <Footer/>
        




    </div>
  );
}

export default App;
