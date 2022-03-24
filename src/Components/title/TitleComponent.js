import './TitleComponent.css'

const TitleComponent = ({ title, img, nameImg }) => {
	return (
		<div className="container-title">
			<div className="container-h2">
				<h2 className="headerTxt">{title}</h2>
			</div>
			<div className="containerImage">
				{img ? <img className="title--img" src={img} alt={nameImg} /> : null}
			</div>
		</div>
	)
}

export default TitleComponent
