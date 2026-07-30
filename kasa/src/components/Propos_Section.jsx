import { useState } from 'react'
import { Link } from 'react-router-dom'

//importation images
import Vector from '../style/assets/icons/Vector.png'


function Propos_Section() {
  return (
    <section className='Propos_Section'>

      <div className="Deroulement">
        <div className="MenuRouge">
            <p>Fiabilité</p>
            <img src={Vector} alt="Icone menue déroulant" />
        </div>
        <div className="Description">
            <p>Les annonces posté sur Kasa garantisse une fiabilité totale. Les photos sont conformes aux logements, et toutes les information sont régulirement vérifié par nos équîpes</p>
        </div>
      </div>

      <div className="Deroulement">
        <div className="MenuRouge">
            <p>Respect</p>
            <img src={Vector} alt="Icone menue déroulant" />
        </div>
        <div className="Description">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div>
      </div>

      <div className="Deroulement">
        <div className="MenuRouge">
            <p>Service</p>
            <img src={Vector} alt="Icone menue déroulant" />
        </div>
        <div className="Description">
            <p>la qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance</p>
        </div>
      </div>

      <div className="Deroulement">
        <div className="MenuRouge">
            <p>Sécurité</p>
            <img src={Vector} alt="Icone menue déroulant" />
        </div>
        <div className="Description">
            <p>La sécurité est ka priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critère de sécurité établis par nos services. En laissant une note aussi bien à nos à l'hôte qu'au locataire, cela permet à nos équipe de vérifier que les stadars sont bien respctés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </div>
      </div>

    </section>
  )
}

export default Propos_Section