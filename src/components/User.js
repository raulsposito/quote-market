import React from 'react';

class User extends React.Component {
    render() {
        return (
            <div className="card">
                <a className="header">
                    {this.props.user.name}
                </a>
            </div>
        );
    }
}

export default User;