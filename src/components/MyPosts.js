import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Posts = props => {
  const PostCards = props.posts.length > 0 ?
    props.posts.map(p => (<p key={p.id}><Link to={`/posts/${p.id}`}>{p.attributes.picture}</Link></p>)) :
    null

  return postCards
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Posts)