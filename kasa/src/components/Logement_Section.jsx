import { useState } from 'react'
import { Link } from 'react-router-dom'
//Importation de gestion des sous-menu

//importation images
import Vector from '../style/assets/icons/Vector.png'
import LogementImage from '../style/assets/Images/LogementImage.jpg'
import EtoileActive from '../style/assets/icons/star-active.svg'
import EtoileInactif from '../style/assets/icons/star-inactif.svg'

function Logement_Section() {
    const [descriptionOuverte, setDescriptionOuverte] = useState(false)
    const [equipementsOuverts, setEquipementsOuverts] = useState(false)

  return (
    <section className='LogementSection'>

      <div id='Caroussel'>

        <div id="FondCaroussel">
            <img src={LogementImage} id="" alt="" />
        </div>

        <div className="MenuFleche">
            <Link to="/logement">
                <img src={Vector} id="FlecheGauche" alt="Fleche de Gauche" />
            </Link>
            
            <Link to="/logement">
                <img src={Vector} id="FlecheDroite" alt="Fleche de Droite" />
            </Link>
        </div>
        
      </div>

      <div className="LogementDescription">



            <div className="LogementInfoConteneur">
                <div className="Logement">
                    <div id="NomLogement">
                        <p className="Localisation1" >Paris center, on the romantic</p>
                        <p className="Localisation1">Canal Saint-Martin</p>
                        <p className="Localisation2">Cozy loft on Canal Saint-Martin</p>
                        <p id="LocalisationBref">Paris, Île-de-France</p>
                </div>

                <div id="InfosLogement">
                    <div id="Tags">
                        <div className="TagBox">
                            <p>Cozy</p>
                        </div>

                        <div className="TagBox">
                            <p>Canal</p>
                        </div>

                        <div className="TagBox">
                            <p>Paris 10</p>
                        </div>
                    </div>
                </div>
                
            </div>

            <div id="InfoNote">
                <div className="BoiteEtoile">
                    <div className="etoile"><img src={EtoileActive} alt="Etoile de Notation" /></div>
                    <div className="etoile"><img src={EtoileActive} alt="Etoile de Notation" /></div>
                    <div className="etoile"><img src={EtoileActive} alt="Etoile de Notation" /></div>
                    <div className="etoile"><img src={EtoileInactif} alt="Etoile de Notation" /></div>
                    <div className="etoile"><img src={EtoileInactif} alt="Etoile de Notation" /></div>
                </div>

                <div className="Equipe">
                    <div className="Personnel">
                        <p>Alexandre</p>
                        <p>Dumas</p>
                    </div>
                    
                    <div className="ImageProfil"></div>
                </div>
            </div>
            </div>
            
            <div className="MenuInfos">

                <div className="Menus Deroulement">

                    <div className="MenuRouge">
                        <p>Description</p>
                        <button
                            type="button"
                            aria-label="Afficher ou masquer la description"
                            aria-expanded={descriptionOuverte}
                            aria-controls="description-logement"
                            onClick={() => setDescriptionOuverte(!descriptionOuverte)}
                        >
                            <img src={Vector} alt="" />
                        </button>
                    </div>

                    <div id="description-logement" className={`Description ${descriptionOuverte ? 'Ouvert' : 'Ferme'}`}>
                        <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 ligne de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. vous êtes à 1 station de la gare de l'est (7 minutes à pied).</p>
                    </div>
                </div>

                <div className="Descriptif-Equipement Deroulement ">
                    <div className="MenuRouge">
                        <p>Équipements</p>
                        <button
                            type="button"
                            aria-label="Afficher ou masquer les équipements"
                            aria-expanded={equipementsOuverts}
                            aria-controls="equipements-logement"
                            onClick={() => setEquipementsOuverts(!equipementsOuverts)}
                        >
                            <img src={Vector} alt="" />
                        </button>
                    </div>
                    <div id="equipements-logement" className={`Description ${equipementsOuverts ? 'Ouvert' : 'Ferme'}`}>
                        <ul>
                            <li>Climatisation</li>
                            <li>Wi-Fi</li>
                            <li>Cuisine</li>
                            <li>Espace de Travail</li>
                            <li>Fer à repasser</li>
                            <li>Sèche-cheveux</li>
                            <li>Cintres</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Logement_Section