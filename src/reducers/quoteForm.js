const initialState = {
    price: "",
    description: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_QUOTE_FORM":
            return action.formData
        case "CREATE_QUOTE":
            return state.concat(action.quote)
        case "RESET_QUOTE_FORM":
            return initialState
        default:
            return state
    }
}