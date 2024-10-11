import './FormLogin.css'
import FormInput from '../FormInput'
import Button from '../../Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Modal from 'react-modal'

const FormLogin = () => {

    const navigate = useNavigate()

    const clickPerson = () =>{
        navigate('/registerperson')
    }

    const clickCompany = () =>{
        navigate('/registercompany')
    }

    const [popup, setPopup] = useState(false)

    function openModal() {
        setPopup(true)
    }

    function closeModal() {
        setPopup(false)
    }

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
            navigate('/matchcompany')
        } else {
            return alert('Email ou senha incorreto')
        }
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
                className='input-login-100'
            />
            <FormInput
                text='Senha:'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=''
                className='input-login-100'
            />
            <div style={{ textAlign: 'center' }} className="to-register">
                <Modal
                    isOpen={popup}
                    onRequestClose={closeModal}
                    contentLabel='register'
                    className='modal-register'
                    overlayClassName='overlay-register'
                >
                    <div className="modal-register-content">
                        <h1>Registar</h1>
                        <h2>Selecione o tipo de conta que quer se registrar</h2>
                        <button className='modal-btn-register' onClick={clickPerson}>Conta Pessoal</button>
                        <button className='modal-btn-cancel' onClick={clickCompany}>Conta Juridica</button>
                    </div>
                </Modal>
                <h1 style={{ fontSize: '20px' }}>Não tem conta?</h1>
                <h1 onClick={openModal} style={{ color: '#ED4D1B', cursor: 'pointer' }}>Registre-se aqui</h1>
            </div>
            <Button
                name='logar'
                onClick={onClickMatch}
            />
        </div>
    )
}

export default FormLogin