const initialstate = []

export default (state = initialstate, action) => {
    switch (action.type) {
        case "SET_POSTS":
            return action.posts
        case "CLEAR_POSTS":
            return initialstate
        default:
            return state
    }
}