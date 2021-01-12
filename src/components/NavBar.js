import React from 'react'
import { connect } from 'react-redux'
import Login from './Login.js'
import Logout from './Logout'

const NavBar = ({ currentUser }) => {
    return (
        <div>
            currentUser ? <Logout /> : <Login />
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(null)(NavBar)