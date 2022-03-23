import Countdown from 'react-countdown'
import Toy1 from '../../assets/ToysCampaign/toy1.png'
import Toy2 from '../../assets/ToysCampaign/toy2.png'
import Toy3 from '../../assets/ToysCampaign/toy3.png'

import './Content.css'

const Completionist = () => (
	<span className="bodyTxt">El evento ya comenzó</span>
)

const renderer = ({ days, hours, minutes, seconds, completed }) => {
	if (completed) {
		return <Completionist />
	} else {
		return (
			<div className="countdown">
				<p className="bodyTxt">
					{`Te quedan:
					${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos para
					participar`}
				</p>
			</div>
		)
	}
}

const Content = () => {
	const eventDate = new Date('2022-04-23T14:15:00')
	const images = [
		{ image: Toy1, alt: 'Toy one', rotate: '345deg' },
		{ image: Toy2, alt: 'Toy two', rotate: '0deg' },
		{ image: Toy3, alt: 'Toy three', rotate: '25deg' },
	]
	return (
		<div className="content-container">
			<h2 className="title info-campaigns">
				23-04-2022 14:15 hs, AKY C. 41 1106, B1902 La Plata, Buenos Aires,
				Argentina
			</h2>
			<div className="countdown-container">
				<Countdown date={eventDate} renderer={renderer} />
			</div>
			<p className="bodyTxt description-campaigns">
				Estás invitada/o. a la gran donatón de juguetes nuevos o usados pero en
				buen estado para los niños de nuestra fundación Somos Más, así llenar
				sus corazones de alegría a centenares de ellos.
			</p>
			<div className="images-container">
				{images.map((image, index) => (
					<div
						className="image-container"
						key={index}
						style={{ transform: `rotate(${image.rotate})` }}
					>
						<img className="img-toy" src={image.image} alt={image.alt} />
					</div>
				))}
			</div>
		</div>
	)
}

export default Content
