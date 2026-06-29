import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//importe le style
import '../src/style/main.scss'

// Importe le router
import Routeur from './components/Routeur.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routeur />
  </StrictMode>,
)
