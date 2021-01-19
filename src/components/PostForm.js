import React from 'react';
import { connect } from 'react-redux'
import { createPost } from "../actions/myPosts";
import { updatePostForm } from '../actions/postForm'

const PostForm = ({ picture, description, budget, updatePostForm, createPost, userId }) => {

    const handleChange = event => {
        const { name, value } = event.target
        updatePostForm(name, value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        createPost(picture, description, budget, userId)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            placeholder="pic url"
            name="picture"
            onChange={handleChange}
            value={picture} /><br></br>
            <input
            placeholder="description"
            name="description"
            onChange={handleChange}
            value={description} /><br></br>
            <input
            placeholder="budget"
            name="budget"
            onChange={handleChange}
            value={budget} /><br></br>
            <input 
            type="submit"
            value="Find Me a Hero!"/>            
        </form>
    )
}

const mapStateToProps = state => {
    const { picture, description, budget } = state.postForm
    return {
        picture,
        description,
        budget,
        userId: state.currentUser.id
    }
}

export default connect(mapStateToProps, { updatePostForm })(PostForm);