import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import postsReducer from './reducers/posts.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import signupForm from './reducers/signupForm'
import newPostForm from './reducers/newPostForm'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    currentUser,
    loginForm,
    signupForm,
    posts: postsReducer,
    newPostForm
})

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhacer(applyMiddleware(thunk)))

export default store