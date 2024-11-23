import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import AppJumbotron from './components/Jumbotron';
import AppFooter from './components/Footer';


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppHome from './components/Home'
import Produit from './pages/Materils';
import Livraison from './pages/Livraison';
import MonCompte from './pages/MonCompte';


const menuItems = [
  { label: 'Home', url: '/home' },
  { label: 'Matériels', url: '/materils' },
  { label: 'Livraison', url: '/livraison' },
  { label: 'Mon Compte', url: '/moncompte' },
];

function App() {
/* 
   // Fetch les données des matériaux lors du chargement de l'application
   useEffect(() => {
    fetch('/api/materils')
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('mesMaterils', JSON.stringify(data));
      })
      .catch((error) => console.error('Erreur lors du chargement des matériaux:', error));
  }, []); // Le tableau vide [] assure que cela s'exécute une seule fois au montage.

*/

  return (

    <Router >

      <Navbar expand="lg" className="bg-secondary">
        <Container>
          <Navbar.Brand href="#home" className='text-warning fs-2 fw-bold'>MaconShope</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <nav className='justify-content-end'>
          <Navbar.Collapse id="basic-navbar-nav">
          <ul className="me-auto ">
            
          {menuItems.map((item) => (
              <li className="nav-item" key={item.url}>
                <Link className="nav-link" to={item.url}>
                {item.label}
                </Link>
              </li>
            ))}

          </ul>
          </Navbar.Collapse>
          </nav>
          </Container>
        </Navbar>

      <Routes>
          <Route path="/home" element={<AppHome />} />
          <Route path="/materils" element={<Produit/>} />
          <Route path="/livraison" element={<Livraison />} />
          <Route path="/moncompte" element={<MonCompte />} />
      </Routes>
             
      <div>
         <AppJumbotron/>
      </div>
      
      <AppFooter/>
      
    </Router>

    
    
  );
}

export default App;
