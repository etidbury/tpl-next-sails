import { actionTypes } from '../constants'



const initialState = {
    count: 0
}



export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case actionTypes.RESET:
            return {
                ...initialState
            }
        default:
            return state
    }
}
