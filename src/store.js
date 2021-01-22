import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import postsReducer from './reducers/posts.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import signupForm from './reducers/signupForm'
import postForm from './reducers/postForm'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    currentUser,
    loginForm,
    signupForm,
    posts: postsReducer,
    postForm
})

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhacer(applyMiddleware(thunk)))

export default store