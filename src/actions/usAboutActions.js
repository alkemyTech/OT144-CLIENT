import * as types from '../types'

export const getAboutUs = (text) => ({
	type: types.ABOUTUS_GET,
	payload: text,
})
