import * as types from '../types'

export const getAboutUs = (text) => {
	return (dispatch) => {
		dispatch(addText())
		try {
			dispatch(addTextOk(text))
		} catch (error) {
			dispatch(addTextError(true))
		}
	}
}

const addText = () => ({
	type: types.USABOUTUS_ADD,
})

const addTextOk = (text) => ({
	type: types.USABOUTUS_UPDATE,
	payload: text,
})

const addTextError = (error) => ({
	type: types.USABOUTUS_ERROR,
	payload: error,
})
