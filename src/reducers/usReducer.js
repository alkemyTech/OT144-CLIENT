import * as types from '../types'

const initialState = {
	text: '',
	loading: false,
	error: false,
}

export const usReducer = (state = initialState, action) => {
	switch (action.type) {
	case types.USABOUTUS_ADD:
		return {
			...state,
			loading: true,
		}
	case types.USABOUTUS_UPDATE:
		return {
			...state,
			loading: false,
			text: action.payload,
		}
	case types.USABOUTUS_ERROR:
		return {
			...state,
			error: true,
		}
	default:
		return state
	}
}
