import React from "react";
import './stylesLogo.css'
import {Link} from "react-router-dom"
import logoSomosMas from '../../../ImageProject/SomosMas.png'

function Logo(){
    return(
        <div className="logo">
            <Link to="/">
                <img src={logoSomosMas} alt='Imagen Logo'></img>
            </Link>
        </div>
    )
}

export default Logo;