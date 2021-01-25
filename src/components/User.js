import React from 'react';

class User extends React.Component {

    state = {
        count: 0
    }

    incrementMe = () => {
        let newCount = this.state.count + 1 
        this.setState({
            count: newCount
        })
    }
    
    render() {
        return (
            <div className="card">
                <a className="header">
                    {this.props.user.name}
                </a>
                <button onClick={this.incrementMe}>♥ Likes: {this.state.count} </button>
            </div>
        );
    }
}

export default User;