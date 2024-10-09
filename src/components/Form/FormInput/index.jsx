import './FormInput.css'

const FormInput = (props) =>{
    return(
        <div className="main-forminput">
            <h1>{props.text}</h1>
            <input type={props.type} onChange={props.onChange} placeholder={props.placeholder} className={props.className}/>
        </div>
    )
}

export default FormInput