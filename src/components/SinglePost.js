
import React, { Component } from 'react';
import { connect } from 'react-redux'
import noPost from '../img/NoPost.png'

class SinglePost extends Component {
  render(post) {
    
    return (
      post ?
      <section>
        <article className="post">
          <img height="200px" width="200px" src={this.posts.picture}></img>
          <p className="post-content">{this.posts.description}</p>
          <p>{this.posts.budget}</p>
        </article>
      </section>
      : <div>
          <img height="200px" width="200px" src={noPost} alt="Sorry, couldn't load!" ></img>
          <p>"Sorry, couldn't load!"</p>
        </div>
    )
    
  }

}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(SinglePost)