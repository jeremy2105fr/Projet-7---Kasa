// Défini le router à partir de BrowserRouter de 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, useNavigate, Form } from 'react-router-dom'

// A supprimer ? 



 
// Importer les différente pages
import Header from '../pages/Header/Header.jsx'
import Section from '../pages/Section.jsx'
import Footer from '../pages/Footer/Footer.jsx'
import Baniere from './baniere.jsx'

// Page d'Erreur P 404 - Toujour en dernier chemin -  Doit ramener sur cette page si chemin incorrect
import Erreur from './Erreur/Erreur.jsx'


// Si définie après <Router> s'affichera toujours
// Définie les route avec path = "/" element
function Routeur() {
  return (
    <Router>

        <Header />
        <Baniere />
        <Section />

            <Routes>
                
                
                <Route path="/" element={<Erreur />} />
            </Routes>

            <Footer />
    </Router>
  )
}

export default Routeur

