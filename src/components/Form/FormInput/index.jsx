import './FormInput.css'

const FormInput = (props) =>{
    return(
        <div className="main-forminput">
            <h1>{props.text}</h1>
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    )
}

export default FormInput