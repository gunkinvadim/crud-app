import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import crudReducer from './crud-reducer'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    crud: crudReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunk))
window.store = store

export default store