import * as types from '../types'

const initialState = {
	categories: [],
	list: [],
}

const categoriesReducer = (state = initialState, action) => {
	switch (action.type) {
	case types.CATEGORIES_SET:
		return {
			...state,
			categories: action.payload,
		}
	case types.CATEGORIES_GET:
		return {
			...state,
			list: [action.payload],
		}
	case types.CATEGORIES_ADD:
		return {
			...state,
			categories: [...state.categories, action.payload],
		}
	case types.CATEGORIES_UPDATE:
		return {
			...state,
			categories: state.categories.map((elem) =>
				elem.id === action.payload.id ? action.payload : elem
			),
		}
	case types.CATEGORIES_DELETE:
		return {
			...state,
			categories: state.categories.filter(
				(elem) => elem.id !== action.payload
			),
		}
	default:
		return { ...state }
	}
}

export default categoriesReducer
