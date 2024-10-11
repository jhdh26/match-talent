import './Profile.css'

import img1 from '../../assets/img1.png'

import FormInput from '../../components/Form/FormInput'

import { MdDelete } from "react-icons/md";

const Profile = (props) => {

    return (
        <div className="main-profile">
            <div className="profile-form">
                <form className='form-profile'>
                    <div className="top-profile-form">
                        <img className='img1-profile' src={img1} alt="" />
                        <div className='first-div-profileform'>
                            <FormInput
                                text={props.text1}
                                type='text'
                                onChange={props.onchange1}
                                className='input-profile-40'
                            />
                            <FormInput
                                text={props.text2}
                                type='text'
                                onChange={props.onchange2}
                                className='input-profile-40'
                            />
                        </div>
                    </div>
                    <div className="second-div-profileform">
                        <FormInput
                            text={props.text3}
                            type='text'
                            onChange={props.onchange3}
                            className='input-profile-70'
                        />
                    </div>
                    <div className="thirty-div-profileform">
                        <h1>{props.textarea1}</h1>
                        <textarea className='profile-textarea' />
                    </div>
                    <div className="thirty-div-profileform">
                        <h1>{props.textarea2}</h1>
                        <textarea className='profile-textarea' />
                    </div>
                    {/* ARRUMAR O CSS */}
                    <div className="div-profile-list">
                        <h1>{props.listText1}</h1>
                        <div className="list-and-button">
                            {props.lista.map((item, index) => (
                                <li key={index} className="list-item">
                                    <span>{item}</span>
                                    <MdDelete className='icon-mddelete'/>
                                </li>
                            ))}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile