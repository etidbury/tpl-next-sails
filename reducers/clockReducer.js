import { actionTypes } from '../constants'
actionTypes.
const initialState = {
    lastUpdate: 0,
    light: false
}

export const clockReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TICK:
            return {
                ...state,
                lastUpdate: action.ts,
                light: !!action.light
            }
        default:
            return state
    }
}
