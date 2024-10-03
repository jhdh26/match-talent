import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'



function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='login' element={null}/>
          <Route path='register' element={null}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
