import { useState } from 'react'

// Definir la navigation Entre les pages
import { useNavigate } from 'react-router-dom'


//import './Section.css'


// importer le header , la baniere et footer

function Section() {
  const navigate = useNavigate();
  return (
    <>

     <h1>je suis la page principal</h1>
    
    </>
  )
}

export default Section