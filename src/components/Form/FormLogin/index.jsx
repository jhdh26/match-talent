import './FormLogin.css'
import FormInput from '../FormInput'
import Button from '../../Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const FormLogin = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [statusEmail, setStatusEmail] = useState(true)
    const [statusPassword, setStatusPassword] = useState(true)

    const validateEmail = () => {
        if (email === '') {
            setStatusEmail(false)
            return false
        }
        setStatusEmail(true)
        return true
    }

    const validatePassword = () => {
        if (password.length < 8) {
            setStatusPassword(false)
            return false
        }
        setStatusPassword(true)
        return true
    }

    const onClickMatch = () => {
        const emailValid = validateEmail()
        const passwordValid = validatePassword()

        if (emailValid && passwordValid) {
            navigate('/match')
        } else {
            return alert('Email ou senha incorreto')
        }
    }

    const toRegister = () =>{
        navigate('/register')
    }


    return (
        <div className="main-formlogin">
            <h1>Login</h1>
            <FormInput
                text='Usuario:'
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=''
            />
            <FormInput
                text='Senha:'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=''
            />
            <div style={{textAlign:'center'}}className="to-register">
                <h1 style={{fontSize:'20px'}}>Não tem conta?</h1>
                <h1 onClick={toRegister} style={{color:'#ED4D1B', cursor:'pointer'}}>Registre-se aqui</h1>
            </div>
            <Button
                name='logar'
                onClick={onClickMatch}
            />
        </div>
    )
}

export default FormLogin