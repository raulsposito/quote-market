import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <h3>Please <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link></h3>
                <div className='welcome'>
                    <Link to="/users">Find a Hero!</Link><br></br>
                    <Link to="/jobs">Be a Hero!</Link>
                </div>
        </div>
    )
};

export default Home