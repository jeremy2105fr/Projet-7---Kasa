import { useState } from 'react'

// Definir la navigation Entre les pages
import { useNavigate } from 'react-router-dom'


//importation des composants'
import Header from '../components/Header.jsx'
import Baniere from '../components/Baniere.jsx'
import Home_Section from '../components/Home_Section.jsx'
import Footer from '../components/Footer.jsx'



function Section() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Baniere />
      <Home_Section />
      <Footer />
    </>
  )
}

export default Section