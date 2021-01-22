import React from 'react';
import { connect } from 'react-redux'
import { createPost } from "../actions/posts";
import { updatePostForm } from '../actions/postForm'

const PostForm = ({ postData, updatePostForm, createPost, history }) => {
    
    const handleChange = event => {
        const { name, value } = event.target
        const updatedPostFormInfo = {
            ...postData,
            [name]: value
        }
        updatePostForm(updatedPostFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        createPost(postData, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            placeholder="pic url"
            name="picture"
            onChange={handleChange}
            value={postData.picture} /><br></br>
            <input
            placeholder="description"
            name="description"
            onChange={handleChange}
            value={postData.description} /><br></br>
            <input
            placeholder="budget"
            name="budget"
            onChange={handleChange}
            value={postData.budget} /><br></br>
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
        budget
    }
}

export default connect(mapStateToProps, { updatePostForm })(PostForm);