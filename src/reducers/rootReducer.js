import { combineReducers } from 'redux'
import authReducer from './authReducer'
import { memberReducer } from './memberReducer'
import newsReducer from './newsReducer'
import categoriesReducer from './categories'
import activitiesReducer from './ActivitiesReducer'
import usersReducer from './usersReducer'
import sliderReducer from './sliderReducer'
import TestimonialsReducer from './TestimonialsReducer'

export const rootReducer = combineReducers({
	auth: authReducer,
	categories: categoriesReducer,
	news: newsReducer,
	activities: activitiesReducer,
	users: usersReducer,
	members: memberReducer,
	sliders: sliderReducer,
	testimonials: TestimonialsReducer,
})
