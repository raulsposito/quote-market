import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import QuoteForm from './QuoteForm'

class PostCard extends Component{
    // debugger

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
                
                <button onClick={this.incrementCounter}>Rating: {this.state.currentCount}</button>
                <QuoteForm />
            </div> :
            <p>No help needed here!</p>
        )

    }

    
}

export default PostCard