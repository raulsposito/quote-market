import React from 'react'
import {Link} from 'react-router-dom'

export default UserCard = ({ user }) => {
    return (
        user ? 
        <div>
            <h4>{this.attributes.pic_url}</h4>
            <p><Link to={`/users/${this.id}`}>See full profile</Link></p>
        </div>
    );
}