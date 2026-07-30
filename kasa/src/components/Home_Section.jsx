import { useState } from 'react'
import { Link } from 'react-router-dom'


function Home_Section() {
  return (
    <section className='HomeSection'>
      <div className="BoiteLocation">
        <Link classname='Location_link' to="/logement">Titre de la location</Link>
      </div>
      <div className="BoiteLocation">
        <Link classname='Location_link' to="/logement">Titre de la location</Link>
      </div>
      <div className="BoiteLocation">
        <Link classname='Location_link' to="/logement">Titre de la location</Link>
      </div>
      <div className="BoiteLocation">
        <Link classname='Location_link' to="/logement">Titre de la location</Link>
      </div>
      <div className="BoiteLocation">
        <Link classname='Location_link' to="/logement">Titre de la location</Link>
      </div>
      <div className="BoiteLocation">
        <Link classname='Location_link' to="/logement">Titre de la location</Link>
      </div>
    </section>
  )
}

export default Home_Section