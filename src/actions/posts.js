import { resetNewPostForm } from './newPostForm'

export const setPosts = posts => {
  return {
    type: "SET_POSTS",
    posts
  }
}

export const clearPosts = () => {
  return {
    type: "CLEAR_POSTS"
  }
}

export const addPost = post => {
  return {
    type: "ADD_POST",
    post
  }
}

export const deletePostSuccess = postId => {
  return {
    type: "DELETE_POST",
    postId
  }
}

export const updatePostSuccess = post => {
  return {
    type: "UPDATE_POST",
    post
  }
}

// async


export const getPosts = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/posts", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setPosts(response))
            }
        })
        .catch(console.log)
    }
}

export const createPost = (picture, description, budget, history, userId ) => {
  return dispatch => {
    const sendablePostData = {
      picture: picture,
      description: description,
      budget: budget,
      user_id: userId
    }
    return fetch("http://localhost:3000/api/v1/posts", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendablePostData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(addPost(resp.data))
          dispatch(resetNewPostForm())
          history.push(`/posts/${resp.data.id}`)
        }
      })
      .catch(console.log)

  }
}