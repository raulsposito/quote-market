import React from 'react'
import { connect } from 'react-redux'

const SinglePost = props => {

  return (
    <section>
      <article className="post">
        <h2>{props.posts.picture}</h2>
        <p className="post-content">{props.posts.description}</p>
        <p>{props.posts.budget}</p>
      </article>
    </section>
  )
  
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(SinglePost)