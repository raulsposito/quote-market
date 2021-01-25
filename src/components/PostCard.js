import React from 'react'
import { Link } from 'react-router-dom'
import QuoteForm from './QuoteForm'

const PostCard = ({ post }) => {
    // debugger
    return (
        post ?
        <div className="post-card">
            <div>
                <img className="pic" src={post.picture} alt="post picture" />
            </div>
            <p>{post.description}</p>
            <p>Hourly pay:{post.budget}</p>
            <Link to={`/posts/${post.id}`}>See this post!</Link>
            <QuoteForm />
        </div> :
        <p>No help needed here!</p>
    )
}

export default PostCard