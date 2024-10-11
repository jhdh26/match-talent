import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Profile from '../../components/Profile'
import './PerfilEmpresa.css'

const PerfilEmpresa = () =>{

    const navigate = useNavigate()

    const logout = () =>{
        navigate('/')
    }

    const goMatch = () =>{
        navigate('/matchcompany')
    }

    const lista = ['Junior quantitative developer', 'Back-end engineer', 'Machine Learning Engineer']

    return(
        <div className="perfilempresa">
            <Header
                onClick2={logout}
                textbtn2='Logout'
                text1='Inicio'
                text2='Match'
                onClickText2={goMatch}
                text3='Eventos'
                text4='Perfil'
                className4='onPage'
            />
            <div className="main-perfilempresa">
                <h1>Perfil empresa</h1>
                <Profile
                    text1='Nome da empresa:'
                    text2='CNPJ'
                    text3='Linkedin (URL)'
                    textarea1='Sobre a empresa:'
                    textarea2='O que buscamos:'
                    listText1='Vagas publicadas:'
                    lista={lista}
                />
            </div>
            <Footer/>
        </div>
    )
}

export default PerfilEmpresa