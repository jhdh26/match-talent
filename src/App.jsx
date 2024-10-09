import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Match from './pages/Match'
import RegisterPerson from './pages/Register/RegisterPerson'
import RegisterCompany from './pages/Register/RegisterCompany'
import ScrollTop from './utils/ScrollTop'




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
          <Route path='match' element={<Match/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
