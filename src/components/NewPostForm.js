import React from 'react';
import { updateNewPostForm } from '../actions/newPostForm'
import { connect } from 'react-redux'
import { createPost } from '../actions/posts'

const NewPostForm = ({ picture, description, budget, history, updateNewPostForm, createPost }) => {
    
    const handleChange= event => {
        const { name, value } = event.target
        updateNewPostForm(name, value)
    }

    const handleSubmit = ( event, picture, description, budget ) => {
        event.preventDefault()
        createPost({picture, description, budget})
    }

    return(
    <form onSubmit={handleSubmit} >
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
        className="button"
        type="submit"
        value="Find Me a Hero!"/>            
    </form>
    )


}

const mapStateToProps = state => {
    const { picture, description, budget } = state.newPostForm 
    return {
        picture,
        description,
        budget
    }
}

export default connect(mapStateToProps, { updateNewPostForm })(NewPostForm);