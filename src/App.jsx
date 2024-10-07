import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Footer from './components/Footer'



function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={null}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
