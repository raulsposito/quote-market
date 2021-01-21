import React from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/posts'
import PostCard from './PostCard'

class PostContainer extends React.Component {

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        return(
            <div>
                { !!this.props.posts ? <PostCard post={this.props.posts}/> : <p>Nope!</p>} 
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        picture: state.picture,
        description: state.description,
        budget: state.budget
    }
}

export default connect(mapStateToProps, {getPosts})(PostContainer)