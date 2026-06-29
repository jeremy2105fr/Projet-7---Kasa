import { useState } from 'react'

import { Link } from 'react-router-dom'

//import './Header.css'

function Header() {
  
  return (
    <>
      <header>
        <div className='KasaLogo'>
          <h1>Kasa</h1>
        </div>
        
       <nav>
          <Link to=" /">Acceuil</Link>
          <Link to=" /">A propos</Link>
       </nav>
      </header>
    </>
  )
}

export default Header