import './TitleComponent.css'

const TitleComponent = ({ title, img, nameImg }) => {
	return (
		<div className="container-title">
			<h2 className="headerTxt">{title}</h2>
			<div className="containerImage">
				{img ? <img className="title--img" src={img} alt={nameImg} /> : null}
			</div>
		</div>
	)
}

export default TitleComponent
