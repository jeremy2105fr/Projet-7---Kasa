import { useState } from 'react'
import { Link } from 'react-router-dom'

//importation images
import Errata from '../style/assets/images/404.png'

function Erreur_Section() {
  return (
    <section className='SectionErreur'>
      <img src={Errata} alt="Page non trouvée" />

      <div className="TexteErrata">
        <p>Oups ! La page que </p>
        <p>vous demandez n'existe pas</p>
      </div>
      
      <Link to="/">Retourner à la page d'accueil</Link>
    </section>
  )
}

export default Erreur_Section