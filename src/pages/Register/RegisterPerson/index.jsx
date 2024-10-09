import './RegisterPerson.css'

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { useNavigate } from 'react-router-dom'
import FormRegister from '../../../components/Form/FormRegister'

const RegisterPerson = () => {

    const navigate = useNavigate()

    const goHome = () =>{
        navigate('/')
    }

    const goLogin = () =>{
        navigate('/login')
    }

    const goMatch  = (event) =>{
        event.preventDefault()
        navigate('/match')
    }

    return (
        <div className="register-person">
            <Header
             textbtn2='Voltar'
             onClick2={goHome}
            />
            <div className="main-register-person">
                <FormRegister
                    text1='Nome completo:'
                    placeholder1='Ex: João Henrique'
                    /*--*/
                    text2='Usuario:'
                    placeholder2='Ex: jhdh26'
                    /*--*/
                    text3='Email:'
                    placeholder3='Ex: jhdh26@hotmail.com'
                    type3='mail'
                    /*--*/
                    text4='Numero:'
                    placeholder4='Ex: 41991316392'
                    type4='phone'
                    /*--*/
                    text5='CPF:'
                    placeholder5='Ex: 123123123-12'
                    /*--*/
                    text6='Senha:'
                    type6='password'
                    /*--*/
                    onClick1={goLogin}
                    /*--*/
                    nameBtn='enviar'
                    onClickBtn={goMatch}
                />
            </div>
            <Footer />
        </div>
    )
}

export default RegisterPerson