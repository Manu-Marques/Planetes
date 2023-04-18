import './styles.scss'
import Header from '../header'
import Login from '../login'
import Register from '../register'
import Home from '../home'
import News from '../news'
import Planetes from '../planetes'
import Lunes from '../lunes'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/news" element={<News />} />
        <Route path="/planetes" element={<Planetes />} />
        <Route path="/lunes" element={<Lunes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}
