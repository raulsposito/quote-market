import React, { Component } from 'react';
import { createPost } from "../actions/posts";

class PostInput extends Component {

    state = {
        picture: '',
        description: '',
        budget: ''
    }

    handleOnChange(event) {
        this.setState({
            picture: event.target.value.picture,
            description: event.target.value.description,
            budget: event.target.value.event
        })
    }

    handleOnSubmit(event) {
        event.preventDefault();
        debugger
        this.props.createPost(this.state);
        this.setState({
            picture: '',
            description: '',
            budget: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input 
                    placeholder="picture"
                    name="picture"
                    value={this.state.picture}
                    onChange={(event) => this.handleOnChange(event)} />
                    <input
                    placeholder="description"
                    name="description"
                    onChange={(event) => this.handleOnChange(event)}
                    value={this.state.description} />
                    <input
                    placeholder="budget"
                    name="budget"
                    onChange={(event) => this.handleOnChange(event)}
                    value={this.state.budget} /><br></br>
                    <input 
                    type="submit"
                    value="Find Me a Hero!"/>
                </form>
            </div>
        )
    }
}

export default PostInput;