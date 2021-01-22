import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const PostsIndex = props => {
    const postsCards = props.posts.length > 0 ?
    props.posts.map(p => (<p key={p.id}><Link to={`/posts/${p.id}`}>{p.attributes.picture}</Link></p>)) :
    <p>No help needed right now...</p>

    return postsCards
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostsIndex)