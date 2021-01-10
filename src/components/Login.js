import React from 'react'
import { updateLoginForm } from '../actions/loginForm.js'
import { connect } from 'react-redux'
import { login } from '../actions/currentUser.js'

const Login = ( loginForm, updateLoginForm, login ) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    return (
        <form onSubmit={login}>
            <input placeholder="email" value={loginForm.email} type="text" name="email" onChange={handleInputChange} />
            <input placeholder="password" value={loginForm.password} type="text" name="password" onChange={handleInputChange} />
            <input type="submit" value="Log In" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login);