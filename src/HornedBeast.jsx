import React from 'react'

class HornedBeast extends React.Component {
    render() {
        <>
            <h2>{this.props.title}</h2>
            <img src={this.props.imageUrl} alt='' title=''></img>
            <p>{this.props.description}</p>
        </>
    }
}