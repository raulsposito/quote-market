// sync

export const setPosts = posts => {
    return {
        type: "SET_POSTS",
        posts
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
                dispatch(setPosts(response.data))
            }
        })
        .catch(console.log)
    }
}
