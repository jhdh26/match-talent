import './FormRegister.css'

import FormInput from '../FormInput'
import Button from '../../Button'
import { useNavigate } from 'react-router-dom'

const FormRegister = (props) => {

    const navigate = useNavigate()

    const goMatch  = (event) =>{
        event.preventDefault()
        navigate('/')
    }

    return (
        <div className="main-formregister">
            <div className="left-form">
                <form className='formregister'>
                    <FormInput
                        text={props.text1}
                        placeholder={props.placeholder1}
                        type={props.type1}
                        className='input-register-100'
                    />
                    <FormInput
                        text={props.text2}
                        placeholder={props.placeholder2}
                        type={props.type2}
                        className='input-register-100'
                    />
                    <FormInput
                        text={props.text3}
                        placeholder={props.placeholder3}
                        type={props.type3}
                        className='input-register-100'
                    />
                    <div style={{display:'flex', gap:'3.8vw'}}>
                        <FormInput
                            text={props.text4}
                            placeholder={props.placeholder4}
                            type={props.type4}
                            className='input-register-50'
                        />
                        <FormInput
                            text={props.text5}
                            placeholder={props.placeholder5}
                            type={props.type5}
                            className='input-register-50'
                        />
                    </div>
                    <FormInput
                        text={props.text6}
                        placeholder={props.placeholder6}
                        type={props.type6}
                        className='input-register-100'
                    />
                    <div style={{display:'flex', gap:'10px'}}>
                        <h1 style={{fontSize:'16px'}}>Ja tem conta?</h1>
                        <h1 onClick={props.onClick1} style={{fontSize:'16px', color:'red', cursor:'pointer'}}>Faça o login aqui</h1>
                    </div>
                    <Button
                        name={props.nameBtn}
                        onClick={props.onClickBtn}
                    />
                </form>
            </div>
            <div className="right-form">

            </div>
        </div>
    )
}

export default FormRegister