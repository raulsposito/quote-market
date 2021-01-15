import React from 'react'
import { connect } from 'react-redux'
import Login from './Login.js'
import Logout from './Logout'

const NavBar = ({ currentUser }) => {
    return (
        <div>
            Welcome to Quote Market!
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(NavBar)