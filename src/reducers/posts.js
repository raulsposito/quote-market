export default function postsReducer(state = [], action){
    switch (action.type) {
        case "SET_POSTS":
            return action.posts
        case "ADD_POST":
            return state.concat(action.post)
        case "DELETE_POST":
            return state.filter(post => post.id === action.postId ? false : true)
        case "CLEAR_POSTS":
            return initialstate
        default:
            return state
    }
}