import { useState } from 'react'
import { Link } from 'react-router-dom'


function Home_Section() {
  return (
    <section>
      <div className="BoiteLocation">
        <Link classname='Location_link' to=" /">Titre de la location</Link>
      </div>
      <div className="BoiteLocation">
        <Link classname='Location_link' to=" /">Titre de la location</Link>
      </div>
      <div className="BoiteLocation">
        <Link classname='Location_link' to=" /">Titre de la location</Link>
      </div>
      <div className="BoiteLocation">
        <Link classname='Location_link' to=" /">Titre de la location</Link>
      </div>
      <div className="BoiteLocation">
        <Link classname='Location_link' to=" /">Titre de la location</Link>
      </div>
      <div className="BoiteLocation">
        <Link classname='Location_link' to=" /">Titre de la location</Link>
      </div>
    </section>
  )
}

export default Home_Section