import React from 'react'
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                favoriteCnt: 0,
                isFavorite: false
        }
    }

    addFave = () => {
        this.setState((prevState) => ({ 
            favoriteCnt: prevState.isFavorite ? prevState.favoriteCnt : prevState.favoriteCnt + 1,
            isFavorite: !prevState.isFavorite
         }))
    }

    faveIcon = () => {
        if (this.state.isFavorite) {
            return <svg className="favicon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"/></svg>
        } else {
            return <svg className="favicon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.867 3.493l4.133 3.444v5.127l-10 8.333-10-8.334v-5.126l4.133-3.444 5.867 3.911 5.867-3.911zm.133-2.493l-6 4-6-4-6 5v7l12 10 12-10v-7l-6-5z"/></svg>
        }
    }

    render() {

        return (<>
            <Card style={{ width: '18rem' }}>
                <Card.Img onClick={ this.addFave } variant="top" src={ this.props.imgUrl } />
                <Card.Body>
                    <Card.Title>{ this.props.title }</Card.Title>
                    <Card.Text>
                        { this.props.description }
                    </Card.Text>
                 </Card.Body>
                 { this.faveIcon() }
                 <span className="favCount">{ this.state.favoriteCnt }</span>
            </Card>
        </>)
    }
}

export default HornedBeast