import "./stylesAboutUs.css";
import TitleComponent from "../title/TitleComponent";

export default function AboutUs({ text }) {
    return (
        <div className="aboutUs-container">
            <TitleComponent text="Nosotros"/>
            <h3 className="subtitle">Sobre nosotros</h3>
            <p>{text}</p>

        </div>
    )
}