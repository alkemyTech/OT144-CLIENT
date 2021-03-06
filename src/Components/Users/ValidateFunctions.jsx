import { TEXT_INPUT_REQUIRED } from '../../constants'

export function validateUsername(value) {
	let error
	if (!value) {
		error = TEXT_INPUT_REQUIRED
	} else if (value.length < 4) {
		error = 'Debe tener al menos 4 caracteres'
	}
	return error
}

export function validateEmail(value) {
	let error
	if (!value) {
		error = TEXT_INPUT_REQUIRED
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
		error = 'Mail invalido'
	}
	return error
}

export function validatePass(value) {
	let error
	if (!value) {
		error = TEXT_INPUT_REQUIRED
	} else if (value.length < 8) {
		error = 'Debe tener al menos 8 caracteres'
	}
	return error
}

export function validateRole(value) {
	let error
	if (value === '') {
		error = TEXT_INPUT_REQUIRED
	}
	return error
}
