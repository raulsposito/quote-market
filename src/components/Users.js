import React from 'react';
import CardFront from './UserCard';
import CardBack from './CardBack';

const Users = () => {
    return (
        <div className="users-card">
            <CardFront pic_url={this.props.pic_url}/>
            <CardBack name={this.props.name}/>
        </div>
    )
}

export default Users