export default function postsReducer(state = {}, action){
    switch (action.type) {
        case "SET_POSTS":
            return action.posts
        case "CLEAR_POSTS":
            return initialstate
        default:
            return state
    }
}