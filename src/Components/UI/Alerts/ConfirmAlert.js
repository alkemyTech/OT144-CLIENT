import Swal from 'sweetalert2'

const ConfirmAlert = async ({
	type = 'warning',
	title = '',
	text = '',
	confirmButtonText = 'Sí',
	cancelButtonText = 'No',
}) => {
	return await Swal.fire({
		icon: type,
		title,
		text,
		confirmButtonColor: '#2c8ef7',
		confirmButtonText,
		cancelButtonColor: '#d33',
		cancelButtonText,
		showCancelButton: true,
	})
}

export default ConfirmAlert
