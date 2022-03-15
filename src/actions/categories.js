import {
	setCategoriesActions,
	addCategoriesActions,
	deleteCategoriesActions,
	updateCategoriesActions,
	getCategoriesActions,
} from './actions'
import {
	getCategories,
	createCategories,
	updateCategory,
	deleteCategory,
	getCategory,
} from '../Services/categoriesService'

export const setCategoriesAction = () => async (dispatch) => {
	try {
		const categories = await getCategories().data
		dispatch(setCategoriesActions(categories))
	} catch (error) {
		console.log(error)
	}
}

export const getCategoriesAction = (id) => async (dispatch) => {
	try {
		const category = await getCategory(id).data
		dispatch(getCategoriesActions(category))
	} catch (error) {
		console.log(error)
	}
}

export const addCategoriesAction = (data) => async (dispatch) => {
	try {
		const category = await createCategories(data).data
		dispatch(addCategoriesActions(category))
	} catch (error) {
		console.log(error)
	}
}

export const updateCategoriesAction = (id, data) => async (dispatch) => {
	try {
		const category = await updateCategory(id, data).data
		dispatch(updateCategoriesActions(category))
	} catch (error) {
		console.log(error)
	}
}

export const deleteCategoriesAction = (id) => async (dispatch) => {
	try {
		await deleteCategory(id)

		dispatch(deleteCategoriesActions(id))
	} catch (error) {
		console.log(error)
	}
}
