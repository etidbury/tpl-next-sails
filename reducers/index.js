import { combineReducers } from 'redux'
import { clockReducer } from './clockReducer'
import { counterReducer } from './counterReducer'
import { loginReducer } from './loginReducer'

const rootReducer = combineReducers({
    clockReducer,
    counterReducer,
    loginReducer
})

export default rootReducer
