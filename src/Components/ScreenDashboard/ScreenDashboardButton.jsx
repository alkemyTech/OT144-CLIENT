import { Link } from 'react-router-dom'

export default function ScreenDashboardButton({path, title, img, alt}) {
	return (
		<Link to={path}>
			<button className='backofficeButtons'>
				<h3>{title}</h3>
				<img src={img} alt={alt} />
			</button>
		</Link>
	)
}