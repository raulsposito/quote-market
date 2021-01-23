const initialState = {
    picture: "",
    description: "",
    budget: ""
}
  
  export default function(state=initialState, action) {
    switch (action.type) {
      case "UPDATE_NEW_POST_FORM":
        return {
          ...state, 
          [action.formData.name]: action.formData.value
        }
      case "RESET_NEW_POST_FORM":
        return initialState
      default:
        return state
    }
  }