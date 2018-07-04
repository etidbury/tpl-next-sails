import {actionTypes}  from "../constants";
const initialState = {
  loading:false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN.REQUEST:
      return {
        ...state,
        loading:true
        };
    case actionTypes.LOGIN.COMPLETE:
      return {
        ...state,
        loading:false
        };
    default:
      return state;
  }
};
