import ErrorAlert from '../Alerts/ErrorAlert'

export function isLogin() {
	return localStorage.getItem('email')
}

export default function UserNotLogged() {
	return (
		<>
			<ErrorAlert text="Debe estar registrado para poder suscribirse." />
			{setTimeout(() => {
				window.location.href = '/'
			}, 2200)}
		</>
	)
}
