import { resetPostForm } from './postForm'

export const setMyPosts = posts => {
  return {
    type: "SET_MY_POSTS",
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

// async actions

export const getMyPosts = () => {
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
          dispatch(setMyPosts(response.data))
        }
      })
      .catch(console.log)
  }
}

export const createPost = (postData, history) => {
  return dispatch => {
    const sendablePostData = {
      picture: postData.picture,
      description: postData.description,
      budget: postData.budget,
      user_id: postData.userId
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
          dispatch(resetPostForm())
          history.push(`/posts/${resp.data.id}`)
        }
      })
      .catch(console.log)

  }
}

export const updatePost = (postData, history) => {
  return dispatch => {
    const sendablePostData = {
      picture: postData.picture,
      description: postData.description,
      budget: postData.budget
    }
    return fetch(`http://localhost:3000/api/v1/posts/${postData.postId}`, {
      credentials: "include",
      method: "PATCH",
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
          dispatch(updatePostSuccess(resp.data))
          history.push(`/posts/${resp.data.id}`)
        }
      })
      .catch(console.log)

  }
}

export const deletePost = (postId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/posts/${postId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deletePostSuccess(postId))
          history.push(`/posts`)
        }
      })
      .catch(console.log)

  }

}