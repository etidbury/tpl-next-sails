import { combineReducers } from 'redux'
import { clockReducer } from './clockReducer'
import { counterReducer } from './counterReducer'

const rootReducer = combineReducers({
    clockReducer,
    counterReducer
})

export default rootReducer
