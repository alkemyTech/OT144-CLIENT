import {
	SLIDER_GET,
	SLIDER_ADD,
	SLIDER_DELETE,
	SLIDER_UPDATE,
} from '../types/sliderTypes'

export const getSliderActions = (slider) => ({
	type: SLIDER_GET,
	payload: slider,
})

export const addSliderActions = (slider) => ({
	type: SLIDER_ADD,
	payload: slider,
})

export const updateSliderActions = (slider) => ({
	type: SLIDER_UPDATE,
	payload: slider,
})

export const deleteSliderActions = (id) => ({
	type: SLIDER_DELETE,
	payload: id,
})
