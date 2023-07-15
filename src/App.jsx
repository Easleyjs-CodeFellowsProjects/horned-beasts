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
    beast: {}
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
        <Header />
        <Body animals={animals} showModal={this.showModal} />
        <SelectedBeast shouldShowModal={this.state.shouldShowModal} hideModal={this.hideModal} beast={this.state.beast} />
        <Footer />
      </>
    )
  }
}

export default App
