import {useState} from "react";

function SousMenu () {
    const [Ouvert, Fermer] = useState(false);

    function handleClick() {
        Fermer(!Ouvert)
        console.log("click");
    }

    return (
        <img 
            className="FlecheDeroulment"
            onClick={handleClick}
        />
        
    )


}

export default SousMenu