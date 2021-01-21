import React from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/posts'
import PostCard from './PostCard'

class PostContainer extends React.Component {

    componentDidMount() {
        this.props.getPosts()
        // debugger
    }

    render() {
        // debugger
        return(
            <div>
                { this.props.posts.length > 0 ? this.props.posts.map(post => <PostCard post={post}/>) : <p>Nope!</p>} 
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { getPosts })(PostContainer)