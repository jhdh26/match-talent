import './HeaderButtons.css'

import { Navigate, useNavigate } from 'react-router-dom' 

const HeaderButtons = () => {

const navigate = useNavigate()

const clickLogin = () =>{
    navigate('/login')
}

const clickRegister = () =>{
    navigate('/register')
}

    return (
        <div className="main-headerbuttons">
            <button onClick={clickLogin} className='header-buttons'>
                Login
            </button>
            <button onClick={clickRegister} className='header-buttons'>
                Se inscreva
            </button>
        </div>
    )
}

export default HeaderButtons