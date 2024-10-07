import './Header.css'


const Header = (props) => {

    return (
        <div className="main-header">
            <h1>Match Talent</h1>
            <div className="header-btn">
            {props.text1 && (
                    <button onClick={props.onClick1} className='header-buttons'>
                        {props.text1}
                    </button>
                )}
                <button onClick={props.onClick2} className='header-buttons'>
                    {props.text2}
                </button>
            </div>
        </div>
    )
}

export default Header