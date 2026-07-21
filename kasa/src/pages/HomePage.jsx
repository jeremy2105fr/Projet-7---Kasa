import { useState } from 'react'

// Definir la navigation Entre les pages
import { useNavigate } from 'react-router-dom'


//importation des composants'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Baniere from '../components/Baniere.jsx'

function Section() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Baniere />
      <h1>je suis la page principal</h1>
      <Footer />
    </>
  )
}

export default Section