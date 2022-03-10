import {
  SLIDER_GET,
  SLIDER_ADD,
  SLIDER_UPDATE,
  SLIDER_DELETE,
} from "../types/sliderTypes";

const initialState = {
  sliders: [],
};

const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SLIDER_GET:
      return {
        sliders: action.payload,
      };
    case SLIDER_ADD:
      return {
        sliders: [...state, action.payload],
      };
    case SLIDER_UPDATE:
      return {
        sliders: state.sliders.map((el) =>
          el.id === action.payload.id ? action.payload : el
        ),
      };
    case SLIDER_DELETE:
      return {
        sliders: state.sliders.filter((el) => el.id !== action.payload),
        ...state,
      };
    default:
      return state;
  }
};

export default sliderReducer;
