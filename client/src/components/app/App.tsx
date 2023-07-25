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
import { AuthProvider } from '../authProvider'

//data
import Data from '../data'

//react
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <div className="App">
      <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/planetes" element={<Planetes />} />
        <Route path="/lunes" element={<Lunes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/data" element={<Data />} />
        <Route path="/profil" element={<Profil />} />

        <Route path="/planetes/details_planetes" element={<DetailsPlanetes />} />
        <Route path="/lunes/details_lunes" element={<DetailsLunes />} />
      </Routes>
      </AuthProvider>
    </div>
  )
}
