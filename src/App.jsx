import { useState } from 'react'
import Footer from "../src/Footer"
import './App.css'
import Main from './Components/Main.jsx/Main'
function App() {


  return (
    <>
      <center className='center'><button className="btn">
        <span className="loading loading-spinner"></span>
        Fake
        email
      </button></center>
      <Main />
      <Footer />
    </>
  )
}

export default App
