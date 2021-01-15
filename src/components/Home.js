import React from 'react';
import Login from './Login'
import Signup from './Signup'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <h3>Please <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link></h3>
        </div>
    )
};

export default Home