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
          <Link className='navbar_link' to="/">Acceuil</Link>
          <Link className='navbar_link' to="/a-propos">A propos</Link>
      </nav>
      </header>
    </>
  )
}

export default Header