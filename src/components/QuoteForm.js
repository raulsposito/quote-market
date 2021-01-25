import React from 'react'
import { connect } from 'react-redux'
import { updateNewQuoteForm } from '../actions/quoteForm'
import { quote } from '../actions/quoteForm'

const QuoteForm = ( quoteFormData ) => {

    const handleChange = event => {
        const {name, value} = event.target
        const updatedQuoteForm = {
            ...quoteFormData,
            [name]: value 
        }
        updateNewQuoteForm(updatedQuoteForm)
    }

    const handleSubmit = event => {
        event.preventDefault()
        // debugger
        quote(quoteFormData, post_id, user_id)
    }

    return(
        <form onSubmit={handleSubmit} >
            <input 
            placeholder="Reward"
            name="price"
            onChange={handleChange}
            value={quoteFormData.price} /><br></br>
            <input 
            placeholder="Comment"
            name="comment"
            onChange={handleChange}
            value={quoteFormData.comment} /><br></br>
            <input
            className="button"
            type="submit"
            value="Apply"/>
        </form>
    )
}

const mapStateToProps = state => {
    // debugger
    return {
        quoteFormData: state.QuoteForm
    }
}

export default connect(mapStateToProps, { updateNewQuoteForm })(QuoteForm)