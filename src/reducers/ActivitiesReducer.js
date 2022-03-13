import * as types from "../types";

const initialState = {
  activities: [],
};

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ACTIVITIES_GET:
        return {
          ...state,
          activities: action.payload,
        };
    case types.ACTIVITIES_ADD:
        return {
          ...state,
          activities: [ ...state.activities, action.payload]
        };
    case types.ACTIVITIES_UPDATE:
        return {
          ...state,
          activities: state.activities.map((elem) => 
            (elem.id === action.payload.id ?
                action.payload 
                : elem
            ))}
      case types.ACTIVITIES_DELETE:
        return {
          ...state,
          activities: state.activities.filter(elem => elem.id !== action.payload)}
      default:
        return { ...state };}
  }

export default activitiesReducer; 