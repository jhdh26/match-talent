import './FormLogin.css'
import FormInput from '../FormInput'
import Button from '../../Button'

const FormLogin = () =>{
    return(
        <div className="main-formlogin">
            <h1>Login</h1>
            <FormInput
                text='Usuario:'
                type='text'
                placeholder=''
            />
            <FormInput
                text='Senha:'
                type='password'
                placeholder=''
            />
            <Button
                name='logar'
            />
        </div>
    )
}

export default FormLogin