import './HomePage.css'
import img1 from '../../assets/img1.jpeg'

const HomePage = () =>{
    return(
        <div className="main-homepage">
            <div className="left-homepage">
                <h1>aaa</h1>
            </div>
            <div className="right-homepage">
                <img src={img1} alt="img1" className='img1'/>
            </div>
        </div>
    )
}

export default HomePage