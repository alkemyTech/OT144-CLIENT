import { Link } from "react-router-dom"
import Logo from "./LOGO-SOMOS MAS.png"

export default function PublicHeader() {
    const datos = [
        { nombre: "Inicio", url: "/" }, 
        { nombre: "Nosotros", url: "/about-us" },
        { nombre: "Actividades", url: "/activities" },
        { nombre: "Novedades", url: "/novedades" },
        { nombre: "Testimonios", url: "" },
        { nombre: "Contacto", url: "/contact" },
        { nombre: "Contribuye", url: "" },
    ]

    return (
        <header>
            <div>
                <img src={Logo} alt= "logo"/>
            </div>
            <nav>
                <ul>
                    {datos.map((dato, index) => {
                        return(
                        <li key={index}>
                            <Link to={dato.url}>{dato.nombre}</Link>
                        </li>
                        )
                    })}
                </ul>
            </nav>
            <div>
                <button>Inicia sesión</button>
                <button>Registrate</button>
            </div>
        </header>
    )
}