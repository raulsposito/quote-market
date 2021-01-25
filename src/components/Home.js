import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <h3><Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link></h3>
        </div>
    )
};

export default Home