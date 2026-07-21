import { useState } from 'react'
import { Link } from 'react-router-dom'

//importation images
import LogoFooter from '../style/assets/logos/logo_footer.png'

function Footer() {
  
  return (
    <>
     <footer>
      <div className="signature">
        <div className='KasaLogo'>
          <img src={LogoFooter} alt="Logo Kasa bas de page" />
        </div>
        <p>@2026 Kasa. Droits réservé</p>
      </div>
      
     </footer>
    </>
  )
}

export default Footer