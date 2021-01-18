import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

const MainContainer = () => {
  return (
    <div className="MainContainer">
        <Link to="/jobs/new">Find a Hero!</Link><br></br>
        <Link to="/jobs">Be a Hero!</Link>
        <Logout />
    </div>
  )
}

export default MainContainer