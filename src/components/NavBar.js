import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'

const NavBar = () => {
    return (
        <div>
            <h2>Welcome to General Services!</h2>
            <NavLink to="/posts/new">Find a Hero!</NavLink><br></br>
            <NavLink to="/posts">Be a Hero!</NavLink>
            <Logout />
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(NavBar)