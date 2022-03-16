import * as types from '../types'

const initialState = {
	news: [],
}

const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.NEWS_GET:
			return {
				news: action.payload,
			}
		case types.NEWS_ADD:
			return {
				news: [...state.news, action.payload],
			}
		case types.NEWS_UPDATE:
			return {
				news: state.news.map((elem) =>
					elem.id === action.payload.id ? action.payload : elem
				),
			}
		case types.NEWS_DELETE:
			return {
				...state,
				news: state.news.filter((elem) => elem.id !== action.payload),
			}
		default:
			return { ...state }
	}
}

export default newsReducer
