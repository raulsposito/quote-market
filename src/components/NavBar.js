import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <h2>Welcome to General Services!</h2>
            <NavLink to="/">Home</NavLink><br></br>
            <div className="row">
                <div className="column" id="find">
                    <NavLink to="/posts/new">Find a Hero!</NavLink><br></br>
                </div>
                <div className="column" id="be">
                    <NavLink to="/posts">Be a Hero!</NavLink><br></br>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(NavBar)