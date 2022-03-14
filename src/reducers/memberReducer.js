import {
	MEMBER_ADD,
	MEMBER_DELETE,
	MEMBER_GET,
	MEMBER_UPDATE,
} from '../types/memberTypes'

const initialState = {
	members: [],
}
export const memberReducer = (state = initialState, action) => {
	switch (action.type) {
		case MEMBER_GET:
			return {
				members: action.payload,
			}
		case MEMBER_ADD:
			return {
				members: [...state, action.payload],
			}
		case MEMBER_UPDATE:
			return {
				members: state.members.map((el) =>
					el.id === action.payload.id ? action.payload : el
				),
			}
		case MEMBER_DELETE:
			return {
				members: state.members.filter((el) => el.id !== action.payload),
				...state,
			}
		default:
			return state
	}
}
