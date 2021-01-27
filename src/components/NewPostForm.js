import React from 'react';
import { updateNewPostForm } from '../actions/newPostForm'
import { connect } from 'react-redux'
import { createPost } from '../actions/posts'

const NewPostForm = ({ picture, description, budget, history, updateNewPostForm, createPost }) => {
    
    const handleChange = event => {
        const { name, value } = event.target
        updateNewPostForm(name, value)
    }

    const handleSubmit = ( event, picture, description, budget, userId ) => {
        event.preventDefault()
        createPost(picture, description, budget, userId)
    }

    return(
    <form onSubmit={handleSubmit} >
        <p><label>Pic Url</label></p>
        <input
        placeholder="pic url"
        name="picture"
        onChange={handleChange}
        value={picture} /><br></br>
        <p><label>Description</label></p>
        <input
        placeholder="description"
        name="description"
        onChange={handleChange}
        value={description} /><br></br>
        <p><label>Budget</label></p>
        <input
        placeholder="budget"
        name="budget"
        onChange={handleChange}
        value={budget} /><br></br>
        <input 
        className="button"
        type="submit"
        value="Find Me a Hero!"/>            
    </form>
    )


}

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    const { picture, description, budget } = state.newPostForm 
    return {
        picture,
        description,
        budget,
        userId
    }
}

export default connect(mapStateToProps, { updateNewPostForm, createPost })(NewPostForm);