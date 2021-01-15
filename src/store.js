import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import signupForm from './reducers/signupForm'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    users: usersReducer,
    currentUser,
    loginForm,
    signupForm
})

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhacer(applyMiddleware(thunk)))

export default store