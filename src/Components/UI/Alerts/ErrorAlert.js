import Swal from 'sweetalert2'

const ErrorAlert = ({
	type = 'error',
	title = 'Error',
	text = 'Ha ocurrido un error, por favor inténtelo de nuevo mas tarde.',
	timer = 2000,
}) => {
	return Swal.fire({
		icon: type,
		title,
		text,
		showConfirmButton: false,
		timer,
	})
}

export default ErrorAlert
