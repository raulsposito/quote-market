import React, { Component } from 'react';

export default class CardBack extends Component {
    render() {
        return (
            <div className="card-back">
                <h3 className="title">{this.props.name}</h3>
            </div>
        )
    }
}