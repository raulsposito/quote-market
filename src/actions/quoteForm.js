export const updateNewQuoteForm = (quoteFormData) => {
    return {
        type: "UPDATE_QUOTE_FORM",
        quoteFormData
    }
}

export const resetQuoteForm = () => {
    return {
        type: "RESET_QUOTE_FORM"
    }
}

export const createQuote = () => {
    return {
        type: "CREATE_QUOTE",
        quote
    }
}

// Async

export const quote = (price, comment, post_id, user_id) => {
    return dispatch => {

        return fetch(`http://localhost:3000/api/v1/posts/${post_id}/quotes`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(price, comment, post_id, user_id)
        })
        .then(r => r.json())
        .then(quote => {
            if (quote.error) {
                alert(quote.error)
            } else {
                dispatch(createQuote(price, comment, post_id, user_id ))
                dispatch(resetQuoteForm())
                history.pushState('/')
            }
            
        })
        .catch(console.log)
    }
}
