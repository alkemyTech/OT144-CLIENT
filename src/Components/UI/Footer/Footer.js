import { useState, useEffect } from 'react'
import ErrorAlert from '../Alerts/ErrorAlert'
import { getAllOrganizationData } from '../../../Services/organizationService'
import { Link } from 'react-router-dom'
import './Footer.css'
import FacebookIcon from '../../../assets/facebook.svg'
import LinkedinIcon from '../../../assets/linkedin.svg'
import InstagramIcon from '../../../assets/instagram.svg'
import userIsAdmin from '../Errors/UserIsAdmin'

const Footer = () => {
	const [data, setData] = useState([])
	const [admin, setAdmin] = useState(false)

	useEffect(() => {
		;(async () => {
			try {
				const response = await getAllOrganizationData()
				setData(response.data.data)
				if (userIsAdmin) {
					setAdmin(true)
				}
			} catch (e) {
				return <ErrorAlert />
			}
		})()
	}, [])

	/* const fetchUser = () => {
		try {
			const response = getUser()
			setUser(response.data.data)
		} catch (e) {
			return <ErrorAlert />
		}
	}
	fetchUser() */

	return (
		<div className="main-footer">
			<div className="container">
				<div className="col col-1">
					<h4>{data?.name}</h4>
					<img src={data?.logo} alt="somos-mas-icon" />
				</div>
				<div className="col col-2">
					<ul className="list-unstyled">
						<li>
							<Link target="_blank" to="/">
								Inicio
							</Link>
						</li>
						<li>
							<Link target="_blank" to="/about-us">
								Nosotros
							</Link>
						</li>
						{admin && (
							<li>
								<Link target="_blank" to="/contact">
									Contacto
								</Link>
							</li>
						)}
						<li>
							<Link target="_blank" to="/Novedades">
								Novedades
							</Link>
						</li>
						<li>
							<Link target="_blank" to="/activities">
								Actividades
							</Link>
						</li>
						<li>
							<Link target="_blank" to="/donar">
								Donaciones
							</Link>
						</li>
					</ul>
				</div>
				<div className="col col-3">
					<ul className="social-media">
						<li>
							<a
								target="_blank"
								href="http://www.facebook.com"
								rel="noreferrer"
							>
								<img src={FacebookIcon} />
							</a>
						</li>
						<li>
							<a
								target="_blank"
								href="http://www.instagram.com"
								rel="noreferrer"
							>
								<img src={InstagramIcon} />
							</a>
						</li>
						<li>
							<a
								target="_blank"
								href="http://www.linkedin.com"
								rel="noreferrer"
							>
								<img src={LinkedinIcon} />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="rights-reserved">
				<p>
					&copy;{new Date().getFullYear()} SOMOS MÁS | All rights reserved |
					Terms Of Service | Privacy
				</p>
			</div>
		</div>
	)
}

export default Footer
