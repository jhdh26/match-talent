import './Login.css'
import Header from '../../components/Header'
import FormLogin from '../../components/Form/FormLogin'
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
                text2='voltar'
            />
            <div className="main-login">
                <FormLogin/>
            </div>
        </div>
    )
}

export default Login