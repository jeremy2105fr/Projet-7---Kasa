import { useState } from 'react'
// Importation des composant
import Header from '../components/Header.jsx'
import ErreurSection from '../components/Erreur_Section.jsx'
import Baniere from '../components/Baniere.jsx'
import Footer from '../components/Footer.jsx'

function Erreur() {
  
  return (
    <>
      <Header />
      <Baniere />
      <ErreurSection />
      <Footer />
    </>
  )
}

export default Erreur