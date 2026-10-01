import { useState } from 'react'

export function useSousMenu() {
    // Garde l'état ouvert/fermé de chaque menu par identifiant.
    const [menusOuverts, setMenusOuverts] = useState({})

    const menuOuvert = (identifiant) => Boolean(menusOuverts[identifiant])

    // Bascule uniquement le menu ciblé.
    const basculerMenu = (identifiant) => {
        setMenusOuverts((etatPrecedent) => ({
            ...etatPrecedent,
            [identifiant]: !etatPrecedent[identifiant],
        }))
    }

    // Convertit l'état du menu en classe CSS pour son panneau.
    const classeMenu = (identifiant) => menuOuvert(identifiant) ? 'Ouvert' : 'Ferme'

    return { menuOuvert, basculerMenu, classeMenu }
}