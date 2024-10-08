import './Login.css'
import Header from '../../components/Header'
import FormLogin from '../../components/Form/FormLogin'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'

const Login = () =>{

    const navigate = useNavigate()

    const voltar = () =>{
        navigate('/')
    }

    return(
        <div className="login">
            <Header
                onClick2={voltar}
                textbtn2='voltar'
            />
            <div className="main-login">
                <FormLogin/>
            </div>
            <Footer/>
        </div>
    )
}

export default Login