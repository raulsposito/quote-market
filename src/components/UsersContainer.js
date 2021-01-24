import React from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers()
    }

}