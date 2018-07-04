import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from '../reducers'

export function initializeStore (initialState = {}) {
    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(
            applyMiddleware(
                thunkMiddleware,
                createLogger({
                    predicate: (getState, action) =>
                        (action.type !== 'TICK')
                    ,
                    collapsed: true
                })
            )
        )
    )

    // store.dispatch(load())

    return store
}
