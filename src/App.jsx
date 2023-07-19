import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import SelectedBeast from './SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css'
import animals from './animals.json'


class App extends React.Component {
  
  state = { 
    shouldShowModal: false,
    beast: {},
    animals: animals
  }

  filterAnimals = (numHorns) => {
    const filteredAnimals = animals.filter( animal => {
      if ( animal.horns == numHorns || numHorns == null) {
        return animal
      }
    })
    this.setState({ animals: filteredAnimals })
  }

  showModal = (beast) => {
    this.setState({ shouldShowModal: true,
                    beast: beast
    })
  }

  hideModal = () => {
    this.setState({
                    shouldShowModal: false,
                    beast: {}
    })
  }

  render() {
    return (
      <>
        <Header filterAnimals={this.filterAnimals} />
        <Body animals={this.state.animals} showModal={this.showModal} />
        <SelectedBeast shouldShowModal={this.state.shouldShowModal} hideModal={this.hideModal} beast={this.state.beast} />
        <Footer />
      </>
    )
  }
}

export default App