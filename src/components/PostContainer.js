import React from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/posts'
import PostCard from './PostCard'

class PostContainer extends React.Component {

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        // debugger
        return(
            <div>
                { !!this.props.posts.picture ? <PostCard post={this.props.posts}/> : <p>Nope!</p>} 
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {getPosts})(PostContainer)