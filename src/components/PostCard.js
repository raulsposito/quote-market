import React from 'react'
import {Link} from 'react-router-dom'

const PostCard = ({ post }) => {
  return (
    post ?
      <div>
        <h3>{post.attributes.picture}</h3>
        <p>{post.attributes.description}</p>
        <h3>{post.attributes.budget}</h3>
        <Link to={`/posts/${post.id}/edit`}>Edit</Link>
      </div> :
      <p>No post!</p>
  )
}

export default PostCard