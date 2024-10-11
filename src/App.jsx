import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import RegisterPerson from './pages/Register/RegisterPerson'
import RegisterCompany from './pages/Register/RegisterCompany'
import ScrollTop from './utils/ScrollTop'
import MatchCompany from './pages/MatchCompany'
import PerfilEmpresa from './pages/PerfilEmpresa'




function App() {
  return (
    <div className="main">
      <BrowserRouter> 
        <ScrollTop/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='registerperson' element={<RegisterPerson/>}/>
          <Route path='registercompany'  element={<RegisterCompany/>}/>
          <Route path='matchcompany' element={<MatchCompany/>}/>
          <Route path='profilecompany' element={<PerfilEmpresa/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
