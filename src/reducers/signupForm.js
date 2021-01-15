const initialState = {
    name: "",
    password: "",
    pic_url: "",
    market: {
      name: ""
    }
}
  
  export default (state=initialState, action) => {
    switch (action.type) {
      case "UPDATE_SIGNUP_FORM":
        return action.formData
      case "RESET_SIGNUP_FORM":
        return initialState
      default:
        return state
    }
  }