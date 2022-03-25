import './stylesPresentationPage.css'
import juguetesPresentacion from '../../../ImageProjects/img/juguetesPresentacion.png'
import logoSomosMas from '../../../ImageProjects/SomosMas2.png'

const PresentationPage = ({ title, subtitle, img, nameImg }) => {
	return (
		<div className="containerPresentationPage">
			<div className="containerLogoPresentationPage">
				<img
					src={juguetesPresentacion}
					alt="detalles imagenes"
					className="detalleImgPresentacion"
				></img>
				<div className="circlePresentation">
					<img
						className="imgLogoPresentation"
						src={logoSomosMas}
						alt="Logo fundación"
					/>
					<h2 className="titlePresentation">{title}</h2>
					<p className="subtitlePresentation">{subtitle}</p>
				</div>
			</div>

			<div className="containerImagePresentation">
				<img className="imgPresentation" src={img} alt={nameImg} />
			</div>
		</div>
	)
}

export default PresentationPage
