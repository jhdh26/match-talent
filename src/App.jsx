import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Match from './pages/Match'




function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={null}/>
          <Route path='match' element={<Match/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
