import * as types from '../types'

const initialState = {
	users: [],
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
	case types.USERS_GET:
		return {
			users: action.payload,
		}
	case types.USERS_ADD:
		return {
			users: [...state.users, action.payload],
		}
	case types.USERS_UPDATE:
		return {
			users: state.users.map((elem) =>
				elem.id === action.payload.id ? action.payload : elem
			),
		}
	case types.USERS_DELETE:
		return {
			users: state.users.filter((elem) => elem.id !== action.payload),
		}
	default:
		return { ...state }
	}
}

export default usersReducer
