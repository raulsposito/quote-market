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
        <form className="input" onSubmit={handleSubmit} >
            <p><label>Reward:</label></p>
            <input
            placeholder="Reward"
            name="price"
            onChange={handleChange}
            value={quoteFormData.price} /><br></br>
            <p><label>Comment:</label></p>
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

export default connect(mapStateToProps, { updateNewQuoteForm, quote })(QuoteForm)