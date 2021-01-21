import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({ post }) => {
    // debugger
    return (
        post ?
        <div>
            <div className="pic">
                <img src={post.picture} alt="post picture" />
            </div>
            <p>{post.description}</p>
            <p>Hourly pay:{post.budget}</p>
            <Link to={`/posts/${post.id}`}>See this post!</Link>
        </div> :
        <p>No help needed here!</p>
    )
}

export default PostCard