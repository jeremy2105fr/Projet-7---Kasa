import { useSousMenu } from './Sous_Menu'

//importation images
import Vector from '../style/assets/icons/Vector.png'

const sections = [
  {
    titre: 'Fiabilité',
    contenu: 'Les annonces posté sur Kasa garantisse une fiabilité totale. Les photos sont conformes aux logements, et toutes les information sont régulirement vérifié par nos équîpes',
  },
  {
    titre: 'Respect',
    contenu: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    titre: 'Service',
    contenu: 'la qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance',
  },
  {
    titre: 'Sécurité',
    contenu: "La sécurité est ka priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critère de sécurité établis par nos services. En laissant une note aussi bien à nos à l'hôte qu'au locataire, cela permet à nos équipe de vérifier que les stadars sont bien respctés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
]

function Propos_Section() {
  const { menuOuvert, basculerMenu, classeMenu } = useSousMenu()

  return (
    <section className='Propos_Section'>
      {sections.map((section, index) => {
        const idContenu = `propos-contenu-${index}`

        return (
          <div className="Deroulement" key={section.titre}>
            <div className="MenuRouge">
              <p>{section.titre}</p>
              <button
                type="button"
                aria-label={`Afficher ou masquer ${section.titre}`}
                aria-expanded={menuOuvert(index)}
                aria-controls={idContenu}
                onClick={() => basculerMenu(index)}
              >
                <img src={Vector} alt="" />
              </button>
            </div>
            <div id={idContenu} className={`Description ${classeMenu(index)}`}>
              <p>{section.contenu}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Propos_Section