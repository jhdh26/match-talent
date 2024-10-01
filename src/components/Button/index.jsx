import './Button.css'

const Button = (props) =>{
    return(
        <div className="main-button">
            <button className='button'>{props.name}</button>
        </div>
    )
}

export default Button