import { useState } from 'react'
// Definir la navigation Entre les pages
import { useNavigate } from 'react-router-dom'
//importation des composants'
import Header from '../components/Header.jsx'
import Baniere from '../components/Baniere.jsx'
import Propos_Section from '../components/Propos_Section.jsx'
import Footer from '../components/Footer.jsx'

function Propos() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Baniere />
      <Propos_Section />
      <Footer />
    </>
  )
}

export default Propos