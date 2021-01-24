import React from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/posts'
import PostCard from './PostCard'
import { v4 as uuidv4 } from 'uuid';

class PostContainer extends React.Component {

    componentDidMount() {
        this.props.getPosts()
        // debugger
    }

    render() {
        // debugger
        return(
            <ul className="post-feed">
                { this.props.posts.length > 0 ? this.props.posts.map(post => <li key={uuidv4()}><PostCard post={post}/></li>) : <p>Nope!</p>} 
            </ul>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { getPosts })(PostContainer)