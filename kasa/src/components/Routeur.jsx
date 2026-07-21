// Défini le router à partir de BrowserRouter de 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importer les différente pages
import HomePage from '../pages/HomePage.jsx'

// Page d'Erreur P 404 - Toujour en dernier chemin -  Doit ramener sur cette page si chemin incorrect
import Erreur from '../pages/Erreur.jsx'


// Si définie après <Router> s'affichera toujours
// Définie les route avec path = "/" element
function Routeur() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Erreur />} />
      </Routes>

    </Router>
  )
}

export default Routeur

