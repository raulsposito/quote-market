import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
            <p><NavLink to="/">Home</NavLink><br></br></p>
            <p><NavLink to="/users">Meet our heroes</NavLink></p>
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