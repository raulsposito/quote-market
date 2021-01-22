export const updatePostForm = (name, value) => {
    return {
      type: "UPDATE_POST_FORM",
      formData: { name, value }
    }
  }
  
  export const resetPostForm = () => {
    return {
      type: "RESET_POST_FORM"
    }
  }