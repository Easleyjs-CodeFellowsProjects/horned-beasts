import React from 'react';
import SelectHorns from './SelectHorns.jsx'

class Header extends React.Component {
    render() {
        return (<>
           <h1>Horned Beasts</h1>
           <SelectHorns filterAnimals={this.props.filterAnimals} />
        </>
        )
    }
}

export default Header