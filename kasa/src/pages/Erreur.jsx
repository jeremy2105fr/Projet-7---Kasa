import { useState } from 'react'
// Importation des composant
import Header from '../components/Header.jsx'

import Baniere from '../components/Baniere.jsx'
import Footer from '../components/Footer.jsx'

function Erreur() {
  
  return (
    <>
      <Header />
      <Baniere />
     <h1>404 - Page non trouvé</h1>
     <p>La page que vous demander n'existe pas / ou plus</p>
      <Footer />
    </>
  )
}

export default Erreur