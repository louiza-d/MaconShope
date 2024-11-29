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

import Cart from './pages/Cart';
import { useSelector } from 'react-redux';





const menuItems = [
  { label: 'Home', url: '/home' },
  { label: 'Matériels', url: '/materils' },
  { label: 'Livraison', url: '/livraison' },
  { label: 'Mon Compte', url: '/moncompte' },
  { label : 'Panier', url: '/Cart'},
];

function App() {
   
const cartCount = useSelector((state) => state.cart.items.length); // Nombre d'articles dans le panier

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
              <li className="nav-item d-flex align-items-center" key={item.url}>
                <Link className="nav-link" to={item.url}>
                {item.label}
                {item.label === 'Panier' && (
                  <>
                  <i className="bi bi-cart fs-4 me-2"></i>
                  {cartCount > 0 && (
                       <span className="badge bg-warning text-dark ms-1">{cartCount}</span>
                  )}
                  </>
              )}
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
          <Route path="/cart" element={<Cart />} />
      </Routes>
             
      <div>
         <AppJumbotron/>
      </div>
      
      <AppFooter/>
      
    </Router>

    
    
  );
}

export default App;
