import * as types from '../types'

const initialState = {
	text: '',
	loading: false,
}

export const usReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.ABOUTUS_UPDATE:
		case types.ABOUTUS_ADD:
			return {
				...state,
			}

		default:
			return state
	}
}
