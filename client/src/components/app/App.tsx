import './styles.scss'
import Header from '../header'
import Login from '../login'
import Register from '../register'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/"/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
