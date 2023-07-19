import './styles.scss'

//components
import Header from '../header'
import Login from '../login'
import Register from '../register'
import Home from '../home'
import News from '../news'
import Planetes from '../planetes'
import Lunes from '../lunes'
import Profil from '../profil'
import DetailsPlanetes from '../planetes/detailsPlanetes'
import DetailsLunes from '../lunes/detailsLunes'

//data
import Data from '../data'

//react
import { Routes, Route } from 'react-router-dom'

export default function App() {

  return (
    <div className="App">
      <Header isLogin={isLogin} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/planetes" element={<Planetes />} />
        <Route path="/lunes" element={<Lunes />} />
        <Route path="/login"
          element={<Login
            handleLogin={handleLogin}
          />} />
        <Route path="/signup"
          element={<Register
            handleLogin={handleLogin} />}
        />
        <Route path='/data' element={<Data />} />
        <Route path="/profil" element={<Profil />} />

        <Route path="/planetes/details_planetes" element={<DetailsPlanetes />} />
        <Route path="/lunes/details_lunes" element={<DetailsLunes />} />
      </Routes>
    </div>
  )
}
