import * as types from '../types'

const initialState = {
	testimonials: [],
}

const TestimonialsReducer = (state = initialState, action) => {
	switch (action.type) {
	case types.TESTIMONIALS_GET:
		return {
			testimonials: action.payload,
		}
	case types.TESTIMONIALS_ADD:
		return {
			testimonials: [...state.testimonials, action.payload],
		}
	case types.TESTIMONIALS_UPDATE:
		return {
			users: state.testimonials.map((elem) =>
				elem.id === action.payload.id ? action.payload : elem
			),
		}
	case types.TESTIMONIALS_DELETE:
		return {
			users: state.testimonials.filter((elem) => elem.id !== action.payload),
		}
	default:
		return { ...state }
	}
}

export default TestimonialsReducer
