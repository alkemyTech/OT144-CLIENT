import Swal from 'sweetalert2'

const BasicAlert = async ({
	type = 'success',
	title = '',
	text = '',
	timer = 1500,
}) => {
	return await Swal.fire({
		icon: type,
		title,
		text,
		showConfirmButton: false,
		timer,
	})
}

export default BasicAlert
