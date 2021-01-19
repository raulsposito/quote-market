import React from 'react';
import PostForm from './PostForm'
import { createPost } from '../actions/myPosts'
import { connect } from 'react-redux'

const NewPostFormWrapper = ({ history, createPost }) => {

  const handleSubmit = (formData, userId) => {
    createPost({
      ...formData,
      userId
    }, history)
  }
  return  <PostForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createPost })(NewPostFormWrapper);