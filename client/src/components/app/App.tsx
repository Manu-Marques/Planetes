import './styles.scss'
import Header from '../header'
import Login from '../login'
import Register from '../register'
import Home from '../home'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Routes>
        <Route path="/"/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}
