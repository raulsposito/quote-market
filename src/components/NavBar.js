import React from 'react'
import { connect } from 'react-redux'

const NavBar = ({ currentUser }) => {
    return (
        <div>
            <h2>Welcome to General Services!</h2>
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(NavBar)