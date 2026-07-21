// Défini le router à partir de BrowserRouter de 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importer les différente pages
import Header from '../components/Header.jsx'
import HomePage from '../pages/HomePage.jsx'
import Footer from '../components/Footer.jsx'
import Baniere from './Baniere.jsx'

// Page d'Erreur P 404 - Toujour en dernier chemin -  Doit ramener sur cette page si chemin incorrect
import Erreur from '../pages/Erreur.jsx'


// Si définie après <Router> s'affichera toujours
// Définie les route avec path = "/" element
function Routeur() {
  return (
    <Router>
      <Header />
      <Baniere />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Erreur />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default Routeur

