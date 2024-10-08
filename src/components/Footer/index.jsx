import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import './Footer.css'

const Footer = () => {

    const navigate = useNavigate()

    const toHome = () =>{
        navigate('/')
    }

    return (
        <div className="main-footer">
            <div className="left-footer">
                <h1 style={{fontSize:'100px'}}>MATCH</h1>
                <h1 style={{fontSize:'100px', color:'#FF9A3C'}}>TALENT</h1>
            </div>
            <div className="middle-footer">
                <h1 onClick={toHome}>Inicio</h1>
                <h1 onClick={null}>Match</h1>
                <h1 onClick={null}>Eventos</h1>
                <h1 onClick={null}>Contato</h1>
            </div>
            <div className="right-footer">
                <h1 style={{fontSize:'20px' , maxWidth:'270px'}}>Receba materiais news leather gratuitos no seu email</h1>
                <input className='input-footer' type="text" placeholder='Digite aqui' />
                <Button
                    name='quero receber'
                />
            </div>
        </div>
    )
}

export default Footer