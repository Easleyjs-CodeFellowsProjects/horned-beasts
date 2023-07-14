import { useState } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css'
import animals from './animals.json'

function App() {

  return (
    <>
      <Header />
      <Body animals={animals} />
    </>
  )
}

export default App
