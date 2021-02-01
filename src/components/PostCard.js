import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import QuoteForm from './QuoteForm'

class PostCard extends Component{

    state = {
        currentCount: 0,
        liked: false
    }

    incrementCounter = () => { 
        let newCount = this.state.currentCount + 1   
        if 
        (this.state.liked) this.state.currentCount
        else

        this.setState({
            currentCount: newCount,
            liked: !this.state.liked
        })
    }

    render() {
        const { post } = this.props 

        return (
            post ?
            <div className="post-card">
                <div>
                    <img className="pic" src={post.picture} alt="post picture" />
                </div>
                <p>{post.description}</p>
                <p>Hourly pay:{post.budget}</p>
                <Link to={`/posts/${post.id}`}>See this post!</Link>
                
                <p><button className="button" onClick={this.incrementCounter}>Likes: {this.state.currentCount}</button></p>
                <QuoteForm />
            </div> :
            <p>No help needed here!</p>
        )

    }

    
}

export default PostCard