import { useState } from 'react'
import { Link } from 'react-router-dom'

//importation images
import Logo from '../style/assets/logos/logo.png'

function Header() {
  
  return (
    <>
      <header>
        <div className='KasaLogo'>
          <img src={Logo} alt="Logo Kasa" />
        </div>
        
      <nav>
          <Link classname='navbar_link' to=" /">Acceuil</Link>
          <Link classname='navbar_link' to=" /">A propos</Link>
      </nav>
      </header>
    </>
  )
}

export default Header