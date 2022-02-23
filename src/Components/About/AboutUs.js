import "./stylesAboutUs.css"

export default function AboutUs({ text }) {
    return (
        <div className="aboutUs-container">
            <h1>Nosotros</h1>{/* Esto se debe renderizar mediante el componente Titulo que aun no está hecho. */}
            <h2 className="title">Sobre nosotros</h2>
            <p>{text}</p>

        </div>
    )
}