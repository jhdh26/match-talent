import './Header.css'


const Header = (props) => {

    return (
        <div className="main-header">
            <h1>Match Talent</h1>
            <div className='header-text'>
                <h1 onClick={props.onClickText1} className={props.className1}>{props.text1}</h1>
                <h1 onClick={props.onClickText2} className={props.className2}>{props.text2}</h1>
                <h1 onClick={props.onClickText3} className={props.className3}>{props.text3}</h1>
                <h1 onClick={props.onClickText4} className={props.className4}>{props.text4}</h1>
            </div>
            <div className="header-btn">
                {props.textbtn1 && (
                    <button onClick={props.onClick1} className='header-buttons'>
                        {props.textbtn1}
                    </button>
                )}
                <button onClick={props.onClick2} className='header-buttons'>
                    {props.textbtn2}
                </button>
            </div>
        </div>
    )
}

export default Header