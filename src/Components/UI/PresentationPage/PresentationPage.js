import './stylesPresentationPage.css'
import juguetesPresentacion from '../../../ImageProjects/juguetesPresentacion.png'
import logoSomosMas from '../../../ImageProjects/SomosMas2.png'
import LazyLoadImages from '../LazyLoadImages/LazyLoadImages'

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
				<LazyLoadImages
					src={img}
					altText={nameImg}
					classText="imgPresentation"
				/>
			</div>
		</div>
	)
}

export default PresentationPage
