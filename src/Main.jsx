import React from 'react';
import HornedBeast from './HornedBeast'

class Main extends React.Component {
    render() {
        return (
        <>
            {this.props.animals.map(animal => {
                return (<HornedBeast title={animal.title} 
                                     imgUrl={animal.image_url} 
                                     description={animal.description}
                                     altText={animal.title}
                        />)
            })}

        </>
        )
    }
}

export default Main;