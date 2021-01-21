import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({ post }) => {
    return (
        post ?
        <div>
            <div className="pic">{post.attributes.picture}</div>
            <p>{post.attributes.description}</p>
            <p>Hourly pay: {post.attributes.budget}</p>
            <Link to={`/posts/${post.id}`}>See this post!</Link>
        </div> :
        <p>No help needed here!</p>
    )
}

export default PostCard